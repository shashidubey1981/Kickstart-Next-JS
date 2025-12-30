
import React from 'react'
import { ConsentForm, Footer, Header, UserFormModal } from '@/components'
import { App } from '@/types'
import { defaultLocale } from '@/lib/contentstack/config/localization'
import { WebConfigContext, WebConfigProvider } from '@/context/WebConfigContext'
import { footerJsonRtePathIncludes, footerReferenceIncludes, getEntries, navigationReferenceIncludes, userFormJsonRtePathIncludes, userFormReferenceIncludes } from '@/lib/contentstack'
import { getPersonalizeSdk } from '@/lib/contentstack/config/personalize-client'

const MainLayout: React.FC<App.MainLayout> = async (
    props: React.PropsWithChildren<App.MainLayout>
) => {  
    const refUids = [
        ...navigationReferenceIncludes,
        ...footerReferenceIncludes,
        ...userFormReferenceIncludes
    ]
    const jsonRtePaths = [
        ...userFormJsonRtePathIncludes,
        ...footerJsonRtePathIncludes
    ]
    const data = await getEntries('web_configuration', defaultLocale, refUids, jsonRtePaths, {}, undefined) as App.WebConfig[]
    const webConfigRes = data?.[0] as App.WebConfig

    return (
        <>
            <WebConfigProvider
                webConfig={webConfigRes}
            >
                {
                    webConfigRes?.main_navigation?.[0] && webConfigRes?.logo
                    && <Header
                        {...webConfigRes.main_navigation[0]}
                        logo={webConfigRes.logo}
                    />
                }
                <div className='main-layout mx-auto h-screen min-h-screen justify-center relative'>
                    {props.children}
                </div>
                {
                    webConfigRes?.footer_navigation?.[0] && webConfigRes?.logo
                    && <Footer
                        {...webConfigRes.footer_navigation[0]}
                        logo={webConfigRes.logo}
                    />
                }
                {/* sticky cookie consent from */}
                {webConfigRes?.consent_modal && <ConsentForm
                    {...webConfigRes.consent_modal}
                    $={{
                        consent_modal: webConfigRes?.$?.consent_modal ,
                        ...webConfigRes?.consent_modal?.$
                    }}
                />}
                {/* user sign up from */}
                {webConfigRes?.user_form?.[0] && <UserFormModal {...webConfigRes.user_form[0]} />}
            </WebConfigProvider>
        </>
    )
}

export { MainLayout }