import { PageWrapper, NotFoundComponent, RenderComponents} from "@/components";
import {getEntries, getEntryByUrl} from "@/lib/contentstack";
import {defaultLocale} from "@/lib/contentstack";
import {Page} from '@/types'

export default async function Home() {

    const variantAliases: string[] = []
    const contentType = 'home_page'
    const path = '/'
    const homePageData = await getEntryByUrl(contentType, defaultLocale as string, path, variantAliases) as Page.LandingPage['entry'];
    return (
        <>
            {homePageData
                ? <PageWrapper {...homePageData}>
                    {homePageData?.components
                        ? <RenderComponents $={homePageData?.$}
                                            hero={homePageData?.hero && Array.isArray(homePageData.hero) ? homePageData.hero[0] : homePageData.hero}
                                            components={[
                                                // eslint-disable-next-line no-unsafe-optional-chaining
                                                ...homePageData?.components
                                            ]}
                                            featured_articles={homePageData?.featured_articles}
                        /> : ''}
                </PageWrapper>
                : <>
                    {<NotFoundComponent/>}
                </>}
        </>
    )
}
