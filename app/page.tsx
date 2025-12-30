
import { PageWrapper, NotFoundComponent, RenderComponents} from "@/components";
import {footerJsonRtePathIncludes, textJSONRtePaths} from "@/lib/contentstack";
import {defaultLocale} from "@/lib/contentstack";
import {Page} from '@/types'
import { featuredArticlesReferenceIncludes, heroReferenceIncludes, imageCardsReferenceIncludes, teaserReferenceIncludes, textAndImageReferenceIncludes, userFormJsonRtePathIncludes, userFormReferenceIncludes} from '@/lib/contentstack'
import { getEntryByUrl } from "@/lib/contentstack/contentstack";

export default async function Home() {

    const variantAliases: string[] = []
    const contentType = 'home_page'
    const entryUrl = '/'
    const refUids = [
        ...heroReferenceIncludes,
        ...textAndImageReferenceIncludes,
        ...teaserReferenceIncludes,
        ...imageCardsReferenceIncludes,
        ...featuredArticlesReferenceIncludes
    ]
    const jsonRTEPaths = [
        ...textJSONRtePaths
    ]
    const res = await getEntryByUrl<Page.Homepage['entry']>(contentType, defaultLocale, entryUrl , refUids, jsonRTEPaths) as Page.LandingPage['entry']
    const homePageData = res as Page.LandingPage['entry'];
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
