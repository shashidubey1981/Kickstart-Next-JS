
import { PageWrapper, NotFoundComponent, RenderComponents} from "@/components";
import {textJSONRtePaths} from "@/lib/contentstack";
import {defaultLocale} from "@/lib/contentstack";
import {Page} from '@/types'
import { featuredArticlesReferenceIncludes, heroReferenceIncludes, imageCardsReferenceIncludes, teaserReferenceIncludes, textAndImageReferenceIncludes, userFormJsonRtePathIncludes, userFormReferenceIncludes} from '@/lib/contentstack'
import { getEntryByUrl } from "@/lib/contentstack/contentstack";
import { getPersonalizeAttribute, removeSpecialChar } from "@/utils/misc";
import { usePersonalizationConfig } from "@/context/PersonalizationConfigProvider";

export default async function Home({ params }: { params: Promise<any> }) {

    const unwrappedParams = await params
    const pathInfoEntries = unwrappedParams;
    const Pathname = pathInfoEntries.path;
    const contentType = 'home_page'
    const { personalizeConfig } = usePersonalizationConfig()
    const audiences = personalizeConfig?.audiences
    console.log('audiences', audiences);
    const criteria = Pathname.split('/').pop()?.toLowerCase()
    console.log('criteria', criteria);
    const attributes = getPersonalizeAttribute(audiences, removeSpecialChar(String(criteria)))
    console.log('attributes', attributes);
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
