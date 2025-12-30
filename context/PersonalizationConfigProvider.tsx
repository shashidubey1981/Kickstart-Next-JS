'use client'

import React, { createContext, ReactNode, useContext} from 'react'
import { Common } from '@/types'
import { Sdk } from '@contentstack/personalize-edge-sdk/dist/sdk'

const personalizeConfiguration: Common.PersonalizeConfig = {
    uid: '',
    audiences: {},
    taxonomy_path: ''
}

// Create a context that captures the initialized state, personalization SDK instance, and personalizeConfig
const PersonalizationConfigContext = createContext({
    personalizeConfig: personalizeConfiguration
})

// Create a hook to use the Personalization context
export const usePersonalizationConfig = () => {
    return useContext(PersonalizationConfigContext)
}

// Create a provider component to wrap the application with the Personalization context
export const PersonalizationConfigProvider = ({ 
    children, 
    personalizeConfig: serverPersonalizeConfig
    
}: { 
    children: ReactNode
    personalizeConfig?: Common.PersonalizeConfig
}) => {

    const personalizeConfig = serverPersonalizeConfig || personalizeConfiguration
    

    return (
        // Provide the Personalization context with the initialization status, initalized personalization SDK instance, and personalizeConfig
        <PersonalizationConfigContext.Provider
            value={{ personalizeConfig: personalizeConfig }}
        >
            {children}
        </PersonalizationConfigContext.Provider>
    )
}