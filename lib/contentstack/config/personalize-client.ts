// Client-side utilities for Contentstack Personalize
// These functions can be used in client components to set user attributes and trigger events

"use client";

import Personalize from "@contentstack/personalize-edge-sdk";

// Type for Personalize SDK instance
type PersonalizeSDK = Awaited<ReturnType<typeof Personalize.init>>;

let personalizeSdkInstance: PersonalizeSDK | null = null;

// Initialize Personalize SDK on the client side
export async function initPersonalizeClient(
  userId?: string
): Promise<PersonalizeSDK | null> {
  const projectUid = process.env.NEXT_PUBLIC_CONTENTSTACK_PERSONALIZE_PROJECT_UID;

  if (!projectUid) {
    console.warn("Personalize project UID not configured. Skipping personalization.");
    return null;
  }

  // Return existing instance if already initialized
  if (personalizeSdkInstance) {
    return personalizeSdkInstance;
  }

  try {
    const initOptions: Personalize.InitOptions = {};
    
    if (userId) {
      initOptions.userId = userId;
    }

    personalizeSdkInstance = await Personalize.init(projectUid, initOptions);
    return personalizeSdkInstance;
  } catch (error) {
    console.error("Failed to initialize Personalize SDK on client:", error);
    return null;
  }
}

// Get the Personalize SDK instance
export function getPersonalizeSdk(): PersonalizeSDK | null {
  return personalizeSdkInstance;
}

// Set user attributes for personalization
export async function setUserAttributes(
  attributes: Record<string, any>
): Promise<void> {
  const sdk = personalizeSdkInstance || (await initPersonalizeClient());
  
  if (!sdk) {
    console.warn("Personalize SDK not initialized. Cannot set user attributes.");
    return;
  }

  try {
    await sdk.set(attributes);
  } catch (error) {
    console.error("Failed to set user attributes:", error);
  }
}

// Trigger a personalization event
export async function triggerPersonalizeEvent(eventKey: string): Promise<void> {
  const sdk = personalizeSdkInstance || (await initPersonalizeClient());
  
  if (!sdk) {
    console.warn("Personalize SDK not initialized. Cannot trigger event.");
    return;
  }

  try {
    await sdk.triggerEvent(eventKey);
  } catch (error) {
    console.error("Failed to trigger event:", error);
  }
}

// Get active experiences for the current user
export function getActiveExperiences(): Personalize.ManifestExperience[] {
  if (!personalizeSdkInstance) {
    return [];
  }

  try {
    return personalizeSdkInstance.getExperiences();
  } catch (error) {
    console.error("Failed to get active experiences:", error);
    return [];
  }
}

// Get variant aliases for the current user
export function getVariantAliasesClient(): string[] {
  if (!personalizeSdkInstance) {
    return [];
  }

  try {
    return personalizeSdkInstance.getVariantAliases();
  } catch (error) {
    console.error("Failed to get variant aliases:", error);
    return [];
  }
}

