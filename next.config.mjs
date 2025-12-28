/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { // available at build time
    CONTENTSTACK_API_KEY: process.env.CONTENTSTACK_API_KEY ,
    isLivePreviewEnabled: process.env.CONTENTSTACK_LIVE_PREVIEW || 'false',
    isEditButtonsEnabled: process.env.CONTENTSTACK_LIVE_EDIT_TAGS || 'false',
    CONTENTSTACK_DELIVERY_TOKEN: process.env.CONTENTSTACK_DELIVERY_TOKEN,
    CONTENTSTACK_MANAGEMENT_TOKEN: process.env.CONTENTSTACK_MANAGEMENT_TOKEN,
    CONTENTSTACK_BRANCH: process.env.CONTENTSTACK_BRANCH ? process.env.CONTENTSTACK_BRANCH : 'main',
    CONTENTSTACK_ENVIRONMENT: process.env.CONTENTSTACK_ENVIRONMENT,
    CONTENTSTACK_HOST: process.env.CONTENTSTACK_HOST,
    CONTENTSTACK_API_HOST: process.env.CONTENTSTACK_API_HOST,
    CONTENTSTACK_APP_HOST: process.env.CONTENTSTACK_APP_HOST,
    CONTENTSTACK_PREVIEW_HOST: process.env.CONTENTSTACK_PREVIEW_HOST,
    CONTENTSTACK_PREVIEW_TOKEN: process.env.CONTENTSTACK_PREVIEW_TOKEN,
    DEFAULT_LOCALE: process.env.DEFAULT_LOCALE || 'en',
    CONTENTSTACK_PERSONALIZE_EDGE_API_URL: process.env.CONTENTSTACK_PERSONALIZE_EDGE_API_URL,
    CONTENTSTACK_PERSONALIZE_PROJECT_UID: process.env.CONTENTSTACK_PERSONALIZE_PROJECT_UID,
    CONTENTSTACK_AB_EXPERIENCE_MENS_SUITS_ID: process.env.CONTENTSTACK_AB_EXPERIENCE_MENS_SUITS_ID || '1',
    CONTENTSTACK_CATEGORY_AB_LANDING_PAGE_PATH: process.env.CONTENTSTACK_CATEGORY_AB_LANDING_PAGE_PATH,
    CONTENTSTACK_AB_PRIMARY_EVENT: process.env.CONTENTSTACK_AB_PRIMARY_EVENT || 'Clicked',
    CONTENTSTACK_VISUAL_BUILDER_MODE: process.env.CONTENTSTACK_VISUAL_BUILDER_MODE ? process.env.CONTENTSTACK_VISUAL_BUILDER_MODE : 'builder',
},
  images: {
    // Configure allowed hostnames for Next.js Image Optimization
    remotePatterns: [
      ...(process.env.NEXT_PUBLIC_CONTENTSTACK_IMAGE_HOSTNAME
        ? [{ hostname: process.env.NEXT_PUBLIC_CONTENTSTACK_IMAGE_HOSTNAME }]
        : [
            { hostname: "images.contentstack.io" },
            { hostname: "*-images.contentstack.com" },
          ]),
    ],
  },
};

export default nextConfig;
