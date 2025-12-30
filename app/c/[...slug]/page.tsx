
import { use } from 'react'
import { PageWrapper, NotFoundComponent, RenderComponents} from "@/components";
import {dynamicComponentReferenceIncludes, textJSONRtePaths} from "@/lib/contentstack";
import {defaultLocale} from "@/lib/contentstack";
import {Page} from '@/types'
import { heroReferenceIncludes, imageCardsReferenceIncludes, teaserReferenceIncludes, textAndImageReferenceIncludes} from '@/lib/contentstack'

export default async function LandingPage({ params }: { params: Promise<any> }) {

    const unwrappedParams = use(params)
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
    const queryParams = `locale=${defaultLocale}&contentTypeUid=${contentType}&entryUrl=${entryUrl}&referenceFieldPath=${refUids.join(',')}&jsonRtePath=${jsonRtePaths.join(',')}`
            console.log('queryParams', queryParams);
    const response = await fetch(`http://localhost:3001/api/entrybyurl?${queryParams.toString()}`, {
        credentials: 'include',
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json();
    console.log('data', data);
    const categoryPageData = data.data as Page.LandingPage['entry'];
    console.log('categoryPageData', categoryPageData);
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
