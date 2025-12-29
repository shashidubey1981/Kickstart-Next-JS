
import { PageWrapper, NotFoundComponent, RenderComponents} from "@/components";
import {footerJsonRtePathIncludes, getEntries, getEntryByUrl} from "@/lib/contentstack";
import {defaultLocale} from "@/lib/contentstack";
import {Page} from '@/types'
import { getPersonalizeSdk } from '@/lib/contentstack/config/personalize-client'
import { featuredArticlesReferenceIncludes, heroReferenceIncludes, imageCardsReferenceIncludes, teaserReferenceIncludes, textAndImageReferenceIncludes, userFormJsonRtePathIncludes, userFormReferenceIncludes} from '@/lib/contentstack'

export default async function Home() {

    const variantAliases: string[] = []
    const contentType = 'home_page'
    const path = '/'
    const refUids = [
        ...heroReferenceIncludes,
        ...textAndImageReferenceIncludes,
        ...teaserReferenceIncludes,
        ...imageCardsReferenceIncludes,
        ...featuredArticlesReferenceIncludes
    ]
    const jsonRtePaths = [
        ...userFormJsonRtePathIncludes,
        ...footerJsonRtePathIncludes
    ]
    const homePageData = await getEntryByUrl<Page.Homepage['entry']>('home_page', defaultLocale, path , refUids, [], undefined) as Page.LandingPage['entry']
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
