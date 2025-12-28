// Importing Contentstack SDK and specific types for region and query operations
import contentstack, { QueryOperation } from "@contentstack/delivery-sdk";

// Importing Contentstack Live Preview utilities and stack SDK 
import ContentstackLivePreview, { IStackSdk } from "@contentstack/live-preview-utils";

// Importing Contentstack Personalize Edge SDK
import Personalize from "@contentstack/personalize-edge-sdk";

// Importing the Page type definition 
import { Page } from "./types";

// helper functions from private package to retrieve Contentstack endpoints in a convienient way
import { getContentstackEndpoints, getRegionForString } from "@timbenniks/contentstack-endpoints";

export const isPreview = process.env.NEXT_PUBLIC_CONTENTSTACK_PREVIEW === "true";

// Set the region by string value from environment variables
const region = getRegionForString(process.env.NEXT_PUBLIC_CONTENTSTACK_REGION as string)

// object with all endpoints for region.
const endpoints = getContentstackEndpoints(region, true)

export const stack = contentstack.stack({
  // Setting the API key from environment variables
  apiKey: process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY as string,

  // Setting the delivery token from environment variables
  deliveryToken: process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN as string,

  // Setting the environment based on environment variables
  environment: process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT as string,

  // Setting the region
  // if the region doesnt exist, fall back to a custom region given by the env vars
  // for internal testing purposes at Contentstack we look for a custom region in the env vars, you do not have to do this.
  region: region ? region : process.env.NEXT_PUBLIC_CONTENTSTACK_REGION as any,

  // Setting the host for content delivery based on the region or environment variables
  // This is done for internal testing purposes at Contentstack, you can omit this if you have set a region above.
  host: process.env.NEXT_PUBLIC_CONTENTSTACK_CONTENT_DELIVERY || endpoints && endpoints.contentDelivery,

  live_preview: {
    // Enabling live preview if specified in environment variables
    enable: process.env.NEXT_PUBLIC_CONTENTSTACK_PREVIEW === 'true',

    // Setting the preview token from environment variables
    preview_token: process.env.NEXT_PUBLIC_CONTENTSTACK_PREVIEW_TOKEN,

    // Setting the host for live preview based on the region
    // for internal testing purposes at Contentstack we look for a custom host in the env vars, you do not have to do this.
    host: process.env.NEXT_PUBLIC_CONTENTSTACK_PREVIEW_HOST || endpoints && endpoints.preview
  }
});

// Initialize live preview functionality
export function initLivePreview() {
  ContentstackLivePreview.init({
    ssr: false, // Disabling server-side rendering for live preview
    enable: process.env.NEXT_PUBLIC_CONTENTSTACK_PREVIEW === 'true', // Enabling live preview if specified in environment variables
    mode: "builder", // Setting the mode to "builder" for visual builder
    stackSdk: stack.config as IStackSdk, // Passing the stack configuration
    stackDetails: {
      apiKey: process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY as string, // Setting the API key from environment variables
      environment: process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT as string, // Setting the environment from environment variables
    },
    clientUrlParams: {
      // Setting the client URL parameters for live preview
      // for internal testing purposes at Contentstack we look for a custom host in the env vars, you do not have to do this.
      host: process.env.NEXT_PUBLIC_CONTENTSTACK_CONTENT_APPLICATION || endpoints && endpoints.application
    },
    editButton: {
      enable: true, // Enabling the edit button for live preview
      exclude: ["outsideLivePreviewPortal"] // Excluding the edit button from the live preview portal
    },
  });
}
// Type for Personalize SDK instance
type PersonalizeSDK = Awaited<ReturnType<typeof Personalize.init>>;

// Initialize Personalize SDK
// This function should be called with the request object in middleware or server components
export async function initPersonalize(
  request?: Request,
  userId?: string
): Promise<PersonalizeSDK | null> {
  const projectUid = process.env.NEXT_PUBLIC_CONTENTSTACK_PERSONALIZE_PROJECT_UID;

  if (!projectUid) {
    console.warn("Personalize project UID not configured. Skipping personalization.");
    return null;
  }

  try {
    const initOptions: Personalize.InitOptions = {};
    
    if (userId) {
      initOptions.userId = userId;
    }

    if (request) {
      initOptions.request = request;
    }

    const personalizeSdk = await Personalize.init(projectUid, initOptions);
    return personalizeSdk;
  } catch (error) {
    console.error("Failed to initialize Personalize SDK:", error);
    return null;
  }
}

// Get variant aliases from Personalize SDK
export function getVariantAliases(personalizeSdk: PersonalizeSDK | null): string[] {
  if (!personalizeSdk) {
    return [];
  }

  try {
    return personalizeSdk.getVariantAliases();
  } catch (error) {
    console.error("Failed to get variant aliases:", error);
    return [];
  }
}

// Function to fetch page data based on the URL with optional personalization
export async function getPage(url: string, variantAliases?: string[]) {
  // Start building the query chain
  let entriesQuery = stack
    .contentType("page") // Specifying the content type as "page"
    .entry(); // Accessing the entry

  // Apply variant aliases for personalization if provided
  // Note: variants() must be called on Entries, not on Query
  if (variantAliases && variantAliases.length > 0) {
    entriesQuery = entriesQuery.variants(variantAliases);
  }

  // Build the query with the URL filter
  const query = entriesQuery
    .query() // Creating a query
    .where("url", QueryOperation.EQUALS, url); // Filtering entries by URL

  const result = await query.find<Page>(); // Executing the query and expecting a result of type Page

  if (result.entries) {
    const entry = result.entries[0]; // Getting the first entry from the result

    if (isPreview) {
      contentstack.Utils.addEditableTags(entry, 'page', true); // Adding editable tags for live preview if enabled
    }

    return entry; // Returning the fetched entry
  }
}