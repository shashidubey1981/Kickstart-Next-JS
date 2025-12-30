
import { PageWrapper, NotFoundComponent, RenderComponents} from "@/components";
import {dynamicComponentReferenceIncludes, textJSONRtePaths} from "@/lib/contentstack";
import {defaultLocale} from "@/lib/contentstack";
import {Page} from '@/types'
import { heroReferenceIncludes, imageCardsReferenceIncludes, teaserReferenceIncludes, textAndImageReferenceIncludes} from '@/lib/contentstack'
import { getEntryByUrl } from "@/lib/contentstack/contentstack";

export default async function LandingPage({ params }: { params: Promise<any> }) {

    const unwrappedParams = await params
    const pathInfoEntries = unwrappedParams;
    const variantAliases: string[] = []
    const contentType = 'category_landing_page'
    const entryUrl = '/c'
    const refUids = [
        ...dynamicComponentReferenceIncludes,
                ...heroReferenceIncludes,
                ...textAndImageReferenceIncludes,
                ...teaserReferenceIncludes,
                ...imageCardsReferenceIncludes
    ]
    const jsonRtePaths = [
        ...textJSONRtePaths
    ]
    const res = await getEntryByUrl<Page.LandingPage['entry']>(contentType,defaultLocale, entryUrl, refUids, jsonRtePaths) as Page.LandingPage['entry']
    const categoryPageData = res as Page.LandingPage['entry'];
    return (
        <>
            {categoryPageData ? 
            <PageWrapper {...categoryPageData}>
                {categoryPageData?.components
                    ? <RenderComponents $={categoryPageData?.$}
                        hero={categoryPageData?.hero && Array.isArray(categoryPageData.hero) ? categoryPageData.hero[0] : categoryPageData.hero}
                        components={categoryPageData?.components}
                        isABEnabled={false}
                        searchParams={pathInfoEntries}
                    /> : ''}
            </PageWrapper>
            : <>
                {<NotFoundComponent />}
            </>}
        </>
    )
}
