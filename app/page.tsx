
import { PageWrapper, NotFoundComponent, RenderComponents} from "@/components";
import {footerJsonRtePathIncludes, textJSONRtePaths} from "@/lib/contentstack";
import {defaultLocale} from "@/lib/contentstack";
import {Page} from '@/types'
import { featuredArticlesReferenceIncludes, heroReferenceIncludes, imageCardsReferenceIncludes, teaserReferenceIncludes, textAndImageReferenceIncludes, userFormJsonRtePathIncludes, userFormReferenceIncludes} from '@/lib/contentstack'

export default async function Home() {

    const variantAliases: string[] = []
    const contentType = 'home_page'
    const entryUrl = '/'
    const refUids = [
        ...heroReferenceIncludes,
        ...textAndImageReferenceIncludes,
        ...teaserReferenceIncludes,
        ...imageCardsReferenceIncludes,
        ...featuredArticlesReferenceIncludes,
        ...userFormJsonRtePathIncludes,
        ...footerJsonRtePathIncludes
    ]
    const jsonRtePaths = [
        ...textJSONRtePaths
    ]
    const queryParams = `locale=${defaultLocale}&contentTypeUid=${contentType}&entryUrl=${entryUrl}&referenceFieldPath=${refUids.join(',')}&jsonRtePath=${jsonRtePaths.join(',')}`
            
    const response = await fetch(`http://localhost:3001/api/entrybyurl?${queryParams.toString()}`, {
        credentials: 'include',
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json();
    const homePageData = data.data as Page.LandingPage['entry'];
    console.log('homePageData', homePageData);
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
