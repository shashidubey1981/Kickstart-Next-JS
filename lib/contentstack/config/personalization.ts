import Personalize from "@contentstack/personalize-edge-sdk";

const defaultEdgeUrl = "https://personalize-edge.contentstack.com";

export const personalizeProjectUid = process.env.CONTENTSTACK_PERSONALIZE_PROJECT_UID;

export const personalizeEdgeUrl = process.env.CONTENTSTACK_PERSONALIZE_EDGE_API_URL ?? defaultEdgeUrl;

export const initializePersonalizeSDK = async (request: any) => {
    console.log('personalizeProjectUid>>>', personalizeProjectUid);
    if (!personalizeProjectUid) {
        throw new Error('CONTENTSTACK_PERSONALIZE_PROJECT_UID is not configured');
    }
    
    Personalize.setEdgeApiUrl(personalizeEdgeUrl);
    const sdk = await Personalize.init(personalizeProjectUid, { request });
    return sdk;
};

