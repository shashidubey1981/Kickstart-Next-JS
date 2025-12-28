// Importing Contentstack SDK and specific types for region and query operations
import contentstack, { QueryOperation } from "@contentstack/delivery-sdk";
import { EmbeddedItem } from '@contentstack/utils/dist/types/Models/embedded-object'
import { addEditableTags, jsonToHTML } from '@contentstack/utils'
// Importing Contentstack Live Preview utilities and stack SDK 
import ContentstackLivePreview, { IStackSdk } from "@contentstack/live-preview-utils";
import { deserializeVariantIds } from "@/utils/deserializeVariantIds";
export const isPreview = process.env.isLivePreviewEnabled === "true";
export const isEditButtonsEnabled = process.env.isEditButtonsEnabled === 'true'
import { LivePreviewMode } from '@/types/common'

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
  
  // Setting the host for content delivery based on the region or environment variables
  // This is done for internal testing purposes at Contentstack, you can omit this if you have set a region above.
  host: process.env.CONTENTSTACK_HOST,

  live_preview: {
    // Enabling live preview if specified in environment variables
    enable: process.env.CONTENTSTACK_LIVE_PREVIEW === 'true',

    // Setting the preview token from environment variables
    preview_token: process.env.CONTENTSTACK_PREVIEW_TOKEN,

    // Setting the host for live preview based on the region
    // for internal testing purposes at Contentstack we look for a custom host in the env vars, you do not have to do this.
    host: process.env.CONTENTSTACK_PREVIEW_HOST
  }
});

// Initialize live preview functionality
export function initLivePreview() {
  ContentstackLivePreview.init({
    enable: process.env.isLivePreviewEnabled === 'true' ? true : false,
    mode: process.env.CONTENTSTACK_VISUAL_BUILDER_MODE as LivePreviewMode,
    clientUrlParams: { host: process.env.CONTENTSTACK_APP_HOST },
    stackDetails: {
        apiKey: process.env.CONTENTSTACK_API_KEY,
        environment: process.env.CONTENTSTACK_ENVIRONMENT,
        branch: process.env.CONTENTSTACK_BRANCH,
        locale: process.env.DEFAULT_LOCALE
    },
    stackSdk: stack.config as IStackSdk,
    ssr: false
  });
}
export const getEntryByUrl = async <T> (contentTypeUid: string, locale: string, entryUrl: string, referenceFieldPath: string[], jsonRtePath: string[], personalizationSDK?: Sdk | undefined, isPersonalizeNeeded?: boolean) => {
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
          .includeReference(referenceFieldPath ?? [])
          
      if (isPersonalizeNeeded) {
          entryQuery.variants(deserializeVariantIds(personalizationSDK))
      }

      if (referenceFieldPath){
          for (const path of referenceFieldPath) {
              entryQuery.includeReference(path)
          }
      }

      if (entryQuery) {
          result = await entryQuery.query()
              .equalTo('url', entryUrl)
              .addParams({ 'include_metadata': 'true' })
              .addParams({ 'include_applied_variants': 'true' })
              .find() as { entries: T[] }
          
          const data = result?.entries?.[0] as EmbeddedItem
          if (data && _.isEmpty(data)) {
              throw '404 | Not found'
          }

          if (jsonRtePath && data) {
              jsonToHTML({
                  entry: data,
                  paths: jsonRtePath
              })
          }
          
          if (isEditButtonsEnabled && data) {
              addEditableTags(data, contentTypeUid, true, locale)
          }
          return data
      }
  }
  catch (error) {
      console.error('🚀 ~ getEntryByUrl ~ error:', error)
      throw error
  }
}