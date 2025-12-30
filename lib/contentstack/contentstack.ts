import _ from 'lodash'
import { Stack } from './config/deliverySDk'
import { Common } from '@/types'
import { QueryOperator } from '@contentstack/delivery-sdk'
import { EmbeddedItem } from '@contentstack/utils/dist/types/Models/embedded-object'
import { deserializeVariantIds } from '@/utils'
import { Sdk } from '@contentstack/personalize-edge-sdk/dist/sdk'
import { addEditableTags, jsonToHTML } from '@contentstack/utils'
import { isLivePreviewEnabled } from './config/deliverySDk'
export const isPreview = process.env.isLivePreviewEnabled === 'true'


export const getEntries = async <T>(contentTypeUid: string, locale: string , referenceFieldPath: string[], jsonRtePath: string[], query: { queryOperator?: string; filterQuery?: any },  personalizationSDK?: Sdk, limit:number=0) => {
    try {    
        let result: { entries: T[] } | null = null
        if(!Stack) {
            throw new Error('===== No stack initialization found====== \n check environment variables: \
            CONTENTSTACK_API_KEY, CONTENTSTACK_DELIVERY_TOKEN, CONTENTSTACK_PREVIEW_TOKEN, CONTENTSTACK_PREVIEW_HOST, CONTENTSTACK_ENVIRONMENT')
        }
        const entryQuery = Stack.contentType(contentTypeUid)
            .entry()
            .locale(locale)
            .includeFallback()
            .includeEmbeddedItems()
            .includeReference(referenceFieldPath ?? [])
            .variants(deserializeVariantIds(personalizationSDK))
            .query()
            

        if (entryQuery) {
            
            if (query?.filterQuery?.length > 0 && query.queryOperator === 'or') { // filterQuery is an array of object consisting key:value pair
               
                const queries = query?.filterQuery?.map((q:any) => { 
                    if (typeof Object.values(q)?.[0] === 'string') {
                        // return Stack.ContentType(contentTypeUid).Query().where(Object.keys(q)?.[0], Object.values(q)?.[0])
                        return Stack && Stack.contentType(contentTypeUid).entry().query().equalTo(Object.keys(q)?.[0], Object.values(q)?.[0] as string)
                    }
                    return Stack && Stack.contentType(contentTypeUid).entry().query().containedIn(Object.keys(q)?.[0], Object.values(q)?.[0] as any)
                })
                entryQuery.queryOperator(QueryOperator.OR, ...queries)
            } 

            if (query?.filterQuery?.key && query?.filterQuery?.value) { // filterQuery is an object consisting key value pair
                entryQuery.equalTo(query.filterQuery.key, query.filterQuery.value)
            }

            // fetching entries based on limit for related articles (not to overload payload)
            if (limit !== 0) entryQuery.limit(limit)

            result = await entryQuery
                .addParams({'include_metadata': 'true'})
                .addParams({'include_applied_variants': 'true'})
                .find() as { entries: T[] }

            const data = result?.entries as EmbeddedItem[]

            if (data && _.isEmpty(data?.[0])) {
                throw '404 | Not found'
            }

            data.forEach((entry) => {
                if (jsonRtePath) {
                    jsonToHTML({
                        entry: entry,
                        paths: jsonRtePath
                    })
                }
                isLivePreviewEnabled && addEditableTags(entry, contentTypeUid, true, locale)
            })
            
            return data
        }
    }
    catch (error) {
        console.error('🚀 ~ getEntries ~ error:', error)
        throw error
    }
}

export const getEntryByUrl = async <T> (contentTypeUid: string, locale: string, entryUrl: string, referenceFieldPath: string[], jsonRtePath: string[], personalizationSDK?: Sdk | undefined) => {
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
            .includeReference(referenceFieldPath ?? [])
            
        if (personalizationSDK) {
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
            
            if (isLivePreviewEnabled && data) {
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


export const getPersonalizationConfigFromCMS = async () => {
    try {
        const personalize_config = await getEntries('personalize_config', process.env.DEFAULT_LOCALE ?? 'en', [],[], {}) as Common.PersonalizeConfig[]
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