'use client'
import React, { useState } from 'react'
import { QuickLinks as QuickLinksProps } from '@/types/components'
import { useWebConfigContext } from '@/context'


/**
 * Quick Links coming from API/ Third party vendors
 */

const quickLinksCategoriesFromApi: QuickLinksProps = {
    id: 'quick-links',
    title: 'Quick Links',
    items: [
        {
            link_text: 'Casual Men\'s Suits',
            link: '/',
        },
        {
            link_text: 'Men\'s Prom Suits',
            link: '/',
        },
    ]
}


/**
 * Quick Links Component
 *
 * A React component that displays quick links with click functionality.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.$ - Optional object containing data-cslp attributes
 * @param {string} props.id - Unique identifier for the component
 * @param {string} props.title - Title/heading for the filter section
 * @param {Array} props.quickLinksCategories - Array of quick link categories
 * @param {Function} props.onLinkClick - Callback function when a link is clicked
 * @param {string} props.className - Additional CSS classes
 *
 * @returns {React.ReactElement} A quick links section with click functionality
 */
const QuickLinks: React.FC<QuickLinksProps> = (props: QuickLinksProps): JSX.Element => {
    const { title, id, $ , slug } = props
    const slugParentCategory = props.slug?.[0]
    const slugSubCategory = props.slug?.[1]
    const { webConfig } = useWebConfigContext()
    const quickLinksCategories = webConfig?.quick_links?.items
    const categoriesSourcefromCMS = quickLinksCategories
    const mergedCategories = [
        ...(categoriesSourcefromCMS || []),
        ...(quickLinksCategoriesFromApi.items || [])
    ]
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div id={id} className="mx-[2.25rem] md:mx-[5.25rem] my-8">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full text-left mb-6 focus:outline-none rounded"
                aria-expanded={isOpen}
                aria-controls={`${id}-content`}
            >
                <h2 className="text-2xl md:text-3xl font-semibold text-stone">
                    {title ?? title}
                </h2>
                <svg
                    className={`w-6 h-6 text-stone transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {mergedCategories.length > 0 && (
                <div
                    id={`${id}-content`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                            {mergedCategories.map(entry => {
                                return (
                                    <button
                                        key={entry.link_text}
                                        type="button"
                                        onClick={() => window.open(entry.link, '_blank')}
                                        className={`
                                            relative flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-200
                                        `}
                                        aria-label={entry.link_text}
                                    >

                                        <span className="text-sm md:text-base font-medium text-stone">
                                            {entry.link_text}
                                        </span>

                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export {QuickLinks}

