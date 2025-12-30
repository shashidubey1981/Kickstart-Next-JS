'use client'
import { createContext, ReactNode, useContext } from 'react'
import { App } from '@/types'

interface WebConfigContextType {
    webConfig?: App.WebConfig
}

// use WebConfigContext to get webConfig from MainLayout
export const WebConfigContext = createContext<WebConfigContextType>({} as WebConfigContextType)

export const useWebConfig = () => {
    return useContext(WebConfigContext)
}


export const WebConfigProvider = ({ 
    children, 
    webConfig: serverWebConfig 
}: { 
    children: ReactNode
    webConfig?: App.WebConfig
}) => {

    const webConfig = serverWebConfig || {} as App.WebConfig

    return (
        // Provide the Personalization context with the initialization status, initalized personalization SDK instance, and personalizeConfig
        <WebConfigContext.Provider
            value={{ webConfig: webConfig }}
        >
            {children}
        </WebConfigContext.Provider>
    )
}
