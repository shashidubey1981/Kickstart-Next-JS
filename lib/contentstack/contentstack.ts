import _ from 'lodash'
import {QueryOperation} from "@contentstack/delivery-sdk";
import { Stack } from './config/deliverySDk'
import ContentstackLivePreview, {IStackSdk} from "@contentstack/live-preview-utils";
import { Common } from '@/types'
import {getContentstackEndpoints, getRegionForString} from "@timbenniks/contentstack-endpoints";
import {EmbeddedItem} from '@contentstack/utils/dist/types/Models/embedded-object'

export const isPreview = process.env.isLivePreviewEnabled === 'true'

// Set the region by string value from environment variables
const region = getRegionForString(process.env.CONTENTSTACK_REGION as string)

// object with all endpoints for region.
const endpoints = getContentstackEndpoints(region, true)

// Initialize live preview functionality
export function initLivePreview() {
    ContentstackLivePreview.init({
        ssr: false, // Disabling server-side rendering for live preview
        enable: process.env.isLivePreviewEnabled === 'true' ? true : false,
        mode: "builder", // Setting the mode to "builder" for visual builder
        stackSdk: Stack.config as IStackSdk, // Passing the stack configuration
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

export const getEntryByUrl = async <T>(contentTypeUid: string, locale: string, entryUrl: string, variantAliases?: string[]) => {
    try {
        let result: { entries: T[] } | null = null
        if (!Stack) {
            throw new Error('===== No stack initialization found====== \n check environment variables: \
        CONTENTSTACK_API_KEY, CONTENTSTACK_DELIVERY_TOKEN, CONTENTSTACK_PREVIEW_TOKEN, CONTENTSTACK_PREVIEW_HOST, CONTENTSTACK_ENVIRONMENT')
        }

        const entryQuery = Stack.contentType(contentTypeUid)
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
      if (!Stack) {
          throw new Error('===== No stack initialization found====== \n check environment variables: \
      CONTENTSTACK_API_KEY, CONTENTSTACK_DELIVERY_TOKEN, CONTENTSTACK_PREVIEW_TOKEN, CONTENTSTACK_PREVIEW_HOST, CONTENTSTACK_ENVIRONMENT')
      }

      const entryQuery = Stack.contentType(contentTypeUid)
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
        const personalize_config = await getEntries(contentType, process.env.DEFAULT_LOCALE ?? 'en',path, variantAliases) as Common.PersonalizeConfig;
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