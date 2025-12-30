import _ from 'lodash'
import { Common } from '@/types'
import { defaultLocale } from './localization';
import { Sdk } from '@contentstack/personalize-edge-sdk/dist/sdk'

// Get API base URL from environment variable or default to localhost:3001
const getApiBaseUrl = () => {
    return process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL || 'http://localhost:3001';
}

export const getEntries = async <T>(contentTypeUid: string, locale: string , referenceFieldPath: string[], jsonRtePath: string[], query: { queryOperator?: string; filterQuery?: any },  personalizationSDK?: Sdk, limit:number=0) => {
    try {
        const queryParams = `locale=${locale}&contentTypeUid=${contentTypeUid}&referenceFieldPath=${referenceFieldPath.join(',')}&jsonRtePath=${jsonRtePath.join(',')}&limit=${limit}`
        const apiBaseUrl = getApiBaseUrl();
        const response = await fetch(`${apiBaseUrl}/api/entries?${queryParams.toString()}`, {
            credentials: 'include',
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json();
        const entriesData = data.data[0];
        return entriesData;
    } catch (error) {
        const apiBaseUrl = getApiBaseUrl();
        if (error instanceof TypeError && error.message.includes('fetch failed')) {
            throw new Error(`Failed to connect to API server at ${apiBaseUrl}. Please ensure the API server is running. Original error: ${error.message}`);
        }
        throw error;
    }
}

export const getEntryByUrl = async <T> (contentTypeUid: string, locale: string, entryUrl: string, referenceFieldPath: string[], jsonRtePath: string[], personalizationSDK?: Sdk | undefined, isPersonalizeNeeded?: boolean) => {
    try {
        const queryParams = `locale=${locale}&contentTypeUid=${contentTypeUid}&entryUrl=${entryUrl}&referenceFieldPath=${referenceFieldPath.join(',')}&jsonRtePath=${jsonRtePath.join(',')}`
        const apiBaseUrl = getApiBaseUrl();
        const response = await fetch(`${apiBaseUrl}/api/entrybyurl?${queryParams.toString()}`, {
            credentials: 'include',
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json();
        const entryData = data.data;
        return entryData;
    } catch (error) {
        const apiBaseUrl = getApiBaseUrl();
        if (error instanceof TypeError && error.message.includes('fetch failed')) {
            throw new Error(`Failed to connect to API server at ${apiBaseUrl}. Please ensure the API server is running. Original error: ${error.message}`);
        }
        throw error;
    }
}

export const getPersonalizeSdk = async <T> (queryParams?: string[]) => {
    try {
        const apiBaseUrl = getApiBaseUrl();
        const response = await fetch(`${apiBaseUrl}/api/personalize-sdk?${queryParams?.toString()}`, {
            credentials: 'include',
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json();
        const personalizeSdkData = data.data[0] as Sdk;
        return personalizeSdkData;
    } catch (error) {
        const apiBaseUrl = getApiBaseUrl();
        if (error instanceof TypeError && error.message.includes('fetch failed')) {
            throw new Error(`Failed to connect to API server at ${apiBaseUrl}. Please ensure the API server is running. Original error: ${error.message}`);
        }
        throw error;
    }
}

/**
 * Fetches the personalization config from CMS
 */

export const getPersonalizationConfigFromCMS = async () => {
    try{
        const queryParams = `locale=${defaultLocale}&contentTypeUid=personalize_config`
        const apiBaseUrl = getApiBaseUrl();
        const response = await fetch(`${apiBaseUrl}/api/entries?${queryParams.toString()}`, {
         credentials: 'include',
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json();
        const personalizeConfigData = data.data[0] as Common.PersonalizeConfig;
        return personalizeConfigData;
    } catch(e){
        console.error('🚀 ~ getPersonalizationConfig ~ error:', e)
        return null
        
    }

}