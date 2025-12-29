// Importing function to fetch page data and preview mode checker from Contentstack utilities
import { getEntries } from "@/lib/contentstack";
// Importing the Page component to render static content
import Page from "@/components/Page";
// Importing Next.js headers function to access request headers
import { headers } from "next/headers";
import { defaultLocale } from "@/lib/contentstack";

// Home page component - serves as the main entry point for the application
// This is an async server component that can fetch data at build time or request time
export default async function Home() {
  // Get request headers to access variant aliases from middleware
  const headersList = await headers();
  const variantAliasesHeader = headersList.get("x-variant-aliases");
  
  // Parse variant aliases from header (comma-separated string)
  const variantAliases = variantAliasesHeader
    ? variantAliasesHeader.split(",").filter(Boolean)
    : undefined;
  const contentType = 'category_landing_page'
  const path = '/c'
  const config = await getEntries(contentType, defaultLocale as string, variantAliases);
  // In production mode, fetch the page data server-side with personalization
  // Pass variant aliases to getPage for personalized content delivery
  //const page = await getPage("/", variantAliases);

  // Return the static Page component with the pre-fetched personalized data
  return <div></div>;
}
