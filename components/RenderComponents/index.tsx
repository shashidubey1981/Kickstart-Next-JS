import dynamic from 'next/dynamic'
import {SingleColumnProductCard} from '@MensWearhouse/kairos-fabric'

const PGPCardCollection = dynamic(() => import('@/components/PGPCardCollection').then(mod => mod.PGPCardCollection))
const CardCollection = dynamic(() => import('@/components/CardCollection').then(mod => mod.CardCollection))
const FeaturedArticles = dynamic(() => import('@/components/FeaturedArticles').then(mod => mod.FeaturedArticles))
const Hero = dynamic(() => import('@/components/Hero').then(mod => mod.Hero))
const Teaser = dynamic(() => import('@/components/Teaser').then(mod => mod.Teaser))
const GuidedFilters = dynamic(() => import('@/components/GuidedFilters').then(mod => mod.GuidedFilters))
const FacetOptions = dynamic(() => import('@/components/FacetOptions').then(mod => mod.FacetOptions))
const QuickLinks = dynamic(() => import('@/components/QuickLinks').then(mod => mod.QuickLinks))
const Text = dynamic(() => import('@/components/Text').then(mod => mod.Text))
const TextAndImageCarousel = dynamic(() => import('@/components/TextAndImageCarousel').then(mod => mod.TextAndImageCarousel))
import {VB_EmptyBlockParentClass} from '@/config'
import {Page} from '@/types'
import {pageBlocks} from '@/types/pages'
import {isDataInLiveEdit} from '@/utils'

/**
 * Renders different components based on the provided page data
 * @param {Object} props - Component properties
 * @param {Array} props.components - Array of page components to render
 * @param {Object} props.featured_articles - Featured articles data
 * @param {Object} props.$ - Optional object containing data-cslp attributes
 * @param {boolean} [props.isABEnabled=false] - Flag to enable A/B testing
 * @returns {JSX.Element} Rendered components
 */

function RenderComponents({
                              hero,
                              components,
                              featured_articles,
                              $,
                              isABEnabled = false,
                              searchParams
                          }: Page.pageRenderProps) {

    const apiComponentMapper = (apiComponent: pageBlocks['api_component'], key: number) => {
        if (!apiComponent) return null

        if (apiComponent.component_name === 'guided_filter') {
            return (
                <GuidedFilters
                    id={`guided-filters-${key}`}
                    {...apiComponent}
                    {...searchParams}
                />
            )
        }
        if (apiComponent.component_name === 'filters') {
            return (
                <FacetOptions
                    id={`filters-${key}`}
                    {...apiComponent}
                    {...searchParams}
                />
            )
        }

        return null
    }

    const componentMapper = (component: pageBlocks, key: number) => {

        switch (true) {

            case (!!component.teaser):
                return (

                    <Teaser
                        id={`teaser-${key}`}
                        isABEnabled={isABEnabled}
                        {...component.teaser}
                    />

                )

            case (!!component.api_component):
                return apiComponentMapper(component.api_component, key)

            case (!!component.text_and_image_carousel):
                return (

                    <TextAndImageCarousel
                        id={`text-image-carousel-${key}`}
                        {...component.text_and_image_carousel}
                    />

                )

                case (!!component.quick_links):
                    return (
    
                            <QuickLinks
                            id={`quick-links-${key}`}
                            {...component.quick_links}
                            {...searchParams}
                        />
                    )
            
                case (!!component.pgp_collection):
                return (

                    <PGPCardCollection
                        id={`pgpcard-collection-${key}`}
                        {...component.pgp_collection}
                        className='mx-[2.25rem] md:mx-[5.25rem] mb-25'
                    />

                )

                

            case (!!component.card_collection):
                return (

                    <CardCollection
                        id={`card-collection-${key}`}
                        {...component.card_collection}
                        className='mx-[2.25rem] md:mx-[5.25rem] mb-25'
                    />

                )    

            case (!!component.text):
                return (

                    <Text
                        id={`text-${key}`}
                        {...component.text}
                    />

                )

            default:
                return null
        }

    }

    return (
        <>
            {hero && <Hero id='hero-banner' {...hero} isABEnabled={isABEnabled} {...$?.hero}/>}
            <div
                {...((isDataInLiveEdit() && $?.components) || {})} //Parent wrapper
                className={components?.length ? undefined : `${VB_EmptyBlockParentClass} max-height mt-32`}
            >
                {components?.map((component, key: number) => <div
                    key={`component-${key}`} id={`component-${key}`}
                    {...(isDataInLiveEdit() && $?.[`components__${key}`])}
                >
                    {
                        componentMapper(component, key)
                    }
                </div>)}
            
            </div>
            {featured_articles && <FeaturedArticles
                id='card-collection-FeaturedArticles' {...featured_articles} {...$?.featured_articles} />}
        </>
    )
}

export {RenderComponents}