import _ from 'lodash'
import contentstack, {QueryOperation} from "@contentstack/delivery-sdk";
import {defaultLocale} from "./localization";
import ContentstackLivePreview, {IStackSdk} from "@contentstack/live-preview-utils";
import {Page, PersonalizeConfig} from "./types";
import {getContentstackEndpoints, getRegionForString} from "@timbenniks/contentstack-endpoints";
import {Sdk} from '@contentstack/personalize-edge-sdk/dist/sdk'
import {EmbeddedItem} from '@contentstack/utils/dist/types/Models/embedded-object'

export const isPreview = process.env.isLivePreviewEnabled === 'true'

// Set the region by string value from environment variables
const region = getRegionForString(process.env.CONTENTSTACK_REGION as string)

// object with all endpoints for region.
const endpoints = getContentstackEndpoints(region, true)

export const stack = contentstack.stack({
    // Setting the API key from environment variables
    apiKey: process.env.CONTENTSTACK_API_KEY as string,

    // Setting the delivery token from environment variables
    deliveryToken: process.env.CONTENTSTACK_DELIVERY_TOKEN as string,

    // Setting the environment based on environment variables
    environment: process.env.CONTENTSTACK_ENVIRONMENT as string,

    // Setting the region
    // if the region doesnt exist, fall back to a custom region given by the env vars
    // for internal testing purposes at Contentstack we look for a custom region in the env vars, you do not have to do this.
    region: region ? region : process.env.CONTENTSTACK_REGION as any,

    // Setting the host for content delivery based on the region or environment variables
    // This is done for internal testing purposes at Contentstack, you can omit this if you have set a region above.
    host: process.env.CONTENTSTACK_HOST || endpoints && endpoints.contentDelivery,

    live_preview: {
        // Enabling live preview if specified in environment variables
        enable: process.env.CONTENTSTACK_PREVIEW_HOST === 'true',

        // Setting the preview token from environment variables
        preview_token: process.env.CONTENTSTACK_PREVIEW_TOKEN,

        // Setting the host for live preview based on the region
        // for internal testing purposes at Contentstack we look for a custom host in the env vars, you do not have to do this.
        host: process.env.CONTENTSTACK_PREVIEW_HOST || endpoints && endpoints.preview
    }
});

// Initialize live preview functionality
export function initLivePreview() {
    ContentstackLivePreview.init({
        ssr: false, // Disabling server-side rendering for live preview
        enable: process.env.isLivePreviewEnabled === 'true' ? true : false,
        mode: "builder", // Setting the mode to "builder" for visual builder
        stackSdk: stack.config as IStackSdk, // Passing the stack configuration
        stackDetails: {
            apiKey: process.env.CONTENTSTACK_API_KEY as string, // Setting the API key from environment variables
            environment: process.env.CONTENTSTACK_ENVIRONMENT as string, // Setting the environment from environment variables
        },
        clientUrlParams: {
            // Setting the client URL parameters for live preview
            // for internal testing purposes at Contentstack we look for a custom host in the env vars, you do not have to do this.
            host: process.env.CONTENTSTACK_HOST || endpoints && endpoints.application
        },
        editButton: {
            enable: true, // Enabling the edit button for live preview
            exclude: ["outsideLivePreviewPortal"] // Excluding the edit button from the live preview portal
        },
    });
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

// export async function getEntries(contentTypeUid: string, locale: string, entryUrl: string, variantAliases?: string[]) {
//   // Start building the query chain
//   let entriesQuery = stack
//     .contentType(contentTypeUid) // Specifying the content type as "page"
//     .entry()
//     .locale(locale); // Accessing the entry

//   // Apply variant aliases for personalization if provided
//   // Note: variants() must be called on Entries, not on Query
//   if (variantAliases && variantAliases.length > 0) {
//     entriesQuery = entriesQuery.variants(variantAliases);
//   }

//   // Build the query with the URL filter
//   const query = entriesQuery
//     .query() // Creating a query
//     .where("url", QueryOperation.EQUALS, entryUrl); // Filtering entries by URL

//   const result = await query.find<Page>(); // Executing the query and expecting a result of type Page

//   if (result.entries) {
//     const entry = result.entries[0]; // Getting the first entry from the result

//     if (isPreview) {
//       contentstack.Utils.addEditableTags(entry, 'page', true); // Adding editable tags for live preview if enabled
//     }

//     return entry; // Returning the fetched entry
//   }
// }

export const getEntryByUrl = async <T>(contentTypeUid: string, locale: string, entryUrl: string, variantAliases?: string[]) => {
    try {
        let result: { entries: T[] } | null = null
        if (!stack) {
            throw new Error('===== No stack initialization found====== \n check environment variables: \
        CONTENTSTACK_API_KEY, CONTENTSTACK_DELIVERY_TOKEN, CONTENTSTACK_PREVIEW_TOKEN, CONTENTSTACK_PREVIEW_HOST, CONTENTSTACK_ENVIRONMENT')
        }

        const entryQuery = stack.contentType(contentTypeUid)
            .entry()
            .locale(locale)
            .includeFallback()
            .includeEmbeddedItems()
            .variants(variantAliases ?? [])

        const query = entryQuery
            .query() // Creating a query
            .where("url", QueryOperation.EQUALS, entryUrl); // Filtering entries by URL

        result = await entryQuery
            .addParams({'include_metadata': 'true'})
            .addParams({'include_applied_variants': 'true'})
            .find() as { entries: T[] }

        const data = result?.entries as EmbeddedItem[]
        if (data && _.isEmpty(data?.[0])) {
            throw '404 | Not found'
        }
        return data?.[0]
    } catch (error) {
        console.error('🚀 ~ getEntryByUrl ~ error:', error)
        throw error
    }
}

export const getEntries = async <T>(contentTypeUid: string, locale: string, entryUrl: string, variantAliases?: string[]) => {
  try {
      let result: { entries: T[] } | null = null
      if (!stack) {
          throw new Error('===== No stack initialization found====== \n check environment variables: \
      CONTENTSTACK_API_KEY, CONTENTSTACK_DELIVERY_TOKEN, CONTENTSTACK_PREVIEW_TOKEN, CONTENTSTACK_PREVIEW_HOST, CONTENTSTACK_ENVIRONMENT')
      }

      const entryQuery = stack.contentType(contentTypeUid)
          .entry()
          .locale(locale)
          .includeFallback()
          .includeEmbeddedItems()
          .variants(variantAliases ?? [])

      const query = entryQuery
          .query() // Creating a query

      result = await entryQuery
          .find() as { entries: T[] }

      const data = result?.entries as EmbeddedItem[]
      if (data && _.isEmpty(data?.[0])) {
          throw '404 | Not found'
      }
      return data?.[0]
  } catch (error) {
      console.error('🚀 ~ getEntryByUrl ~ error:', error)
      throw error
  }
}

export const getPersonalizationConfigFromCMS = async () => {
    try {
        const contentType = 'personalize_config'
        const path = '/'
        const variantAliases: string[] = []
        const personalize_config = await getEntries(contentType, process.env.DEFAULT_LOCALE ?? 'en',path, variantAliases) as PersonalizeConfig;
        if (personalize_config) {
            return personalize_config
        } else {
            throw 'Unable to fetch Personalize Config | 404'
        }
    } catch (e) {
        console.error('🚀 ~ getPersonalizationConfig ~ error:', e)
        return null

    }

}