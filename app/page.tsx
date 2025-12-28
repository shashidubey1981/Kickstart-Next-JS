import { getEntryByUrl, isPreview } from "@/lib/contentstack";
import Preview from "@/components/Preview";
import { Page } from '@/types'
import { dynamicComponentReferenceIncludes, heroReferenceIncludes, textAndImageReferenceIncludes, teaserReferenceIncludes, imageCardsReferenceIncludes, textJSONRtePaths } from "@/lib/helper";
export default async function Home() {
  
  const locale = process.env.DEFAULT_LOCALE || 'en';
  const refUids = [
    ...dynamicComponentReferenceIncludes,
    ...heroReferenceIncludes,
    ...textAndImageReferenceIncludes,
    ...teaserReferenceIncludes,
    ...imageCardsReferenceIncludes
]
const jsonRtePaths = [
    ...textJSONRtePaths
]

  const contentType = 'category_landing_page'
  const path = '/c'
  const sendPersonalizeNeeded = true;
  const res = await getEntryByUrl<Page.LandingPage['entry']>(contentType,locale, path, refUids, jsonRtePaths, personalizeSdk, sendPersonalizeNeeded) as Page.LandingPage['entry']

  // Check if the application is running in preview mode
  // Preview mode enables live editing capabilities for content creators
  // if (isPreview) {
  //   // Return the Preview component which handles real-time content updates
  //   // The path "/" represents the home page URL in Contentstack
  //   return <Preview path="/" />;
  // }

  // Return the static Page component with the pre-fetched personalized data
  return <div>{res.title}</div>;
}
