'use client'
import React, {useState} from 'react'

/**
 * Extended Data for Guided Filter Entry
 */
export interface GuidedFilterEntryExtendedData {
    image1: string | null
    sequence: string
    uniqueId: string
}

/**
 * Guided Filter Entry Type
 */
export interface GuidedFilterEntry {
    label: string
    value: string
    image: string
    count: number
    extendedData: GuidedFilterEntryExtendedData
}

/**
 * Guided Filter Category Type
 */
export interface GuidedFilterCategory {
    SEQUENCE: string
    ATTR: string
    Question: string
    parentCategory: string
    subCategory: string
    entry: GuidedFilterEntry[]
    attributeName: string
    default_filter: string
    guided_filter: string
    id: number
}

/**
 * Guided Filters Categories Type
 */
export type GuidedFiltersCategories = GuidedFilterCategory[]

const guidedFiltersCategories: GuidedFiltersCategories = [
    {
        "SEQUENCE": "1",
        "ATTR": "Type",
        "Question": "What type of tuxedo are you looking for?",
        "parentCategory": "mens-clothing",
        "subCategory": "mens-suits",
        "entry": [
            {
                "label": "3 Piece Tuxedo",
                "value": "facets.12564.value.raw%3A%223+Piece+Tuxedo%22",
                "image": "/wcsstore/TMWCAS/30_3 PIECE TUXEDO",
                "count": 5,
                "extendedData": {
                    "image1": "30_3 PIECE TUXEDO",
                    "sequence": "1.0",
                    "uniqueId": "5430311"
                }
            },
            {
                "label": "Tuxedo Vests",
                "value": "facets.12564.value.raw%3A%22Tuxedo+Vests%22",
                "image": "/wcsstore/TMWCAS/30_TUXEDO VESTS",
                "count": 3,
                "extendedData": {
                    "image1": "30_TUXEDO VESTS",
                    "sequence": "1.0",
                    "uniqueId": "3350014"
                }
            },
            {
                "label": "Tuxedo Pants",
                "value": "facets.12564.value.raw%3A%22Tuxedo+Pants%22",
                "image": "/wcsstore/TMWCAS/30_TUXEDO PANTS",
                "count": 6,
                "extendedData": {
                    "image1": "30_TUXEDO PANTS",
                    "sequence": "1.0",
                    "uniqueId": "3350211"
                }
            },
            {
                "label": "2 Piece Tuxedo",
                "value": "facets.12564.value.raw%3A%222+Piece+Tuxedo%22",
                "image": "/wcsstore/TMWCAS/30_2 PIECE TUXEDO",
                "count": 15,
                "extendedData": {
                    "image1": "30_2 PIECE TUXEDO",
                    "sequence": "1.0",
                    "uniqueId": "3350068"
                }
            },
            {
                "label": "Formal Vests",
                "value": "facets.12564.value.raw%3A%22Formal+Vests%22",
                "image": "/wcsstore/TMWCAS/80_FORMAL VESTS",
                "count": 5,
                "extendedData": {
                    "image1": "80_FORMAL VESTS",
                    "sequence": "1.0",
                    "uniqueId": "1043346"
                }
            },
            {
                "label": "Tuxedo Jackets",
                "value": "facets.12564.value.raw%3A%22Tuxedo+Jackets%22",
                "image": "/wcsstore/TMWCAS/30_TUXEDO JACKETS",
                "count": 12,
                "extendedData": {
                    "image1": "30_TUXEDO JACKETS",
                    "sequence": "1.0",
                    "uniqueId": "3350201"
                }
            }
        ],
        "attributeName": "Type",
        "default_filter": "Y",
        "guided_filter": "1",
        "id": 12564
    },
    {
        "SEQUENCE": "2",
        "ATTR": "Fit",
        "Question": "What fit are you looking for?",
        "parentCategory": "mens-clothing",
        "subCategory": "dress-shirts",
        "entry": [
            {
                "label": "Classic Fit",
                "value": "facets.12531.value.raw%3A%22Classic+Fit%22",
                "image": "",
                "count": 4,
                "extendedData": {
                    "image1": null,
                    "sequence": "1.0",
                    "uniqueId": "1041974"
                }
            },
            {
                "label": "Slim Fit",
                "value": "facets.12531.value.raw%3A%22Slim+Fit%22",
                "image": "",
                "count": 27,
                "extendedData": {
                    "image1": null,
                    "sequence": "1.0",
                    "uniqueId": "1042871"
                }
            },
            {
                "label": "Executive Fit",
                "value": "facets.12531.value.raw%3A%22Executive+Fit%22",
                "image": "",
                "count": 2,
                "extendedData": {
                    "image1": null,
                    "sequence": "1.0",
                    "uniqueId": "1039096"
                }
            },
            {
                "label": "Modern Fit",
                "value": "facets.12531.value.raw%3A%22Modern+Fit%22",
                "image": "",
                "count": 11,
                "extendedData": {
                    "image1": null,
                    "sequence": "1.0",
                    "uniqueId": "1044516"
                }
            }
        ],
        "attributeName": "Fit",
        "default_filter": "Y",
        "guided_filter": "2",
        "id": 12531
    },
    {
        "SEQUENCE": "1",
        "ATTR": "ColorFamily",
        "Question": "What color are you looking for?",
        "parentCategory": "mens-clothing",
        "subCategory": "sport-coats-dinner-jackets",
        "entry": [
            {
                "label": "Tan",
                "value": "facets.12545.value.raw%3A%22Tan%22",
                "image": "https://image.menswearhouse.com/is/image/TMW/COLOR_TAN",
                "count": 25,
                "extendedData": {
                    "image1": "COLOR_TAN",
                    "sequence": "1.0",
                    "uniqueId": "1041464"
                }
            },
            {
                "label": "Orange",
                "value": "facets.12545.value.raw%3A%22Orange%22",
                "image": "https://image.menswearhouse.com/is/image/TMW/COLOR_ORANGE",
                "count": 1,
                "extendedData": {
                    "image1": "COLOR_ORANGE",
                    "sequence": "1.0",
                    "uniqueId": "1040401"
                }
            },
            {
                "label": "Blue",
                "value": "facets.12545.value.raw%3A%22Blue%22",
                "image": "https://image.menswearhouse.com/is/image/TMW/COLOR_BLUE",
                "count": 130,
                "extendedData": {
                    "image1": "COLOR_BLUE",
                    "sequence": "1.0",
                    "uniqueId": "1043404"
                }
            },
            {
                "label": "Gray",
                "value": "facets.12545.value.raw%3A%22Gray%22",
                "image": "https://image.menswearhouse.com/is/image/TMW/COLOR_GRAY",
                "count": 109,
                "extendedData": {
                    "image1": "COLOR_GRAY",
                    "sequence": "1.0",
                    "uniqueId": "1039680"
                }
            },
            {
                "label": "White",
                "value": "facets.12545.value.raw%3A%22White%22",
                "image": "https://image.menswearhouse.com/is/image/TMW/COLOR_WHITE",
                "count": 9,
                "extendedData": {
                    "image1": "COLOR_WHITE",
                    "sequence": "1.0",
                    "uniqueId": "1040308"
                }
            },
            {
                "label": "Brown",
                "value": "facets.12545.value.raw%3A%22Brown%22",
                "image": "https://image.menswearhouse.com/is/image/TMW/COLOR_BROWN",
                "count": 17,
                "extendedData": {
                    "image1": "COLOR_BROWN",
                    "sequence": "1.0",
                    "uniqueId": "1040093"
                }
            },
            {
                "label": "Green",
                "value": "facets.12545.value.raw%3A%22Green%22",
                "image": "https://image.menswearhouse.com/is/image/TMW/COLOR_GREEN",
                "count": 14,
                "extendedData": {
                    "image1": "COLOR_GREEN",
                    "sequence": "1.0",
                    "uniqueId": "1041560"
                }
            },
            {
                "label": "Pink",
                "value": "facets.12545.value.raw%3A%22Pink%22",
                "image": "https://image.menswearhouse.com/is/image/TMW/COLOR_PINK",
                "count": 3,
                "extendedData": {
                    "image1": "COLOR_PINK",
                    "sequence": "1.0",
                    "uniqueId": "1041067"
                }
            },
            {
                "label": "Burgundy",
                "value": "facets.12545.value.raw%3A%22Burgundy%22",
                "image": "https://image.menswearhouse.com/is/image/TMW/COLOR_BURGUNDY",
                "count": 6,
                "extendedData": {
                    "image1": "COLOR_BURGUNDY",
                    "sequence": "1.0",
                    "uniqueId": "1041675"
                }
            },
            {
                "label": "Black",
                "value": "facets.12545.value.raw%3A%22Black%22",
                "image": "https://image.menswearhouse.com/is/image/TMW/COLOR_BLACK",
                "count": 107,
                "extendedData": {
                    "image1": "COLOR_BLACK",
                    "sequence": "1.0",
                    "uniqueId": "1042900"
                }
            },
            {
                "label": "Multi",
                "value": "facets.12545.value.raw%3A%22Multi%22",
                "image": "https://image.menswearhouse.com/is/image/TMW/COLOR_MULTI",
                "count": 14,
                "extendedData": {
                    "image1": "COLOR_MULTI",
                    "sequence": "1.0",
                    "uniqueId": "1041366"
                }
            },
            {
                "label": "Red",
                "value": "facets.12545.value.raw%3A%22Red%22",
                "image": "https://image.menswearhouse.com/is/image/TMW/COLOR_RED",
                "count": 3,
                "extendedData": {
                    "image1": "COLOR_RED",
                    "sequence": "1.0",
                    "uniqueId": "1042653"
                }
            }
        ],
        "attributeName": "Color",
        "default_filter": "Y",
        "guided_filter": "1",
        "id": 12545
    }

]

export interface GuidedFilters {
    id?: string
    title?: string
    guidedFiltersCategories?: GuidedFiltersCategories
    onFilterChange?: (selectedValues: string[]) => void
    slug?: string[]
}


/**
 * GuidedFilters Component
 *
 * A React component that displays guided filters with color filtering functionality.
 * Users can select multiple colors to filter content.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.$ - Optional object containing data-cslp attributes
 * @param {string} props.id - Unique identifier for the component
 * @param {string} props.title - Title/heading for the filter section
 * @param {Array} props.color_filters - Array of color filter options
 * @param {Function} props.onFilterChange - Callback function when filters change
 * @param {string} props.className - Additional CSS classes
 *
 * @returns {React.ReactElement} A guided filters section with color filtering
 */
const GuidedFilters: React.FC<GuidedFilters> = (props: GuidedFilters) => {
    // Find matched guided filter category based on slug[0]/slug[1]
    const slugParentCategory = props.slug?.[0]
    const slugSubCategory = props.slug?.[1]
    const categoriesSource = props.guidedFiltersCategories ?? guidedFiltersCategories
    const matchedCategory = slugParentCategory && slugSubCategory
        ? categoriesSource.find(
            category =>
                category.parentCategory === slugParentCategory &&
                category.subCategory === slugSubCategory
        )
        : undefined

    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    const toggleValue = (value: string) => {
        // Single-select: selecting a new value replaces the old one.
        // Clicking the already-selected value clears it.
        const next = selectedValue === value ? null : value
        setSelectedValue(next)
        props.onFilterChange?.(next ? [next] : [])
    }

    const clearAll = () => {
        setSelectedValue(null)
        props.onFilterChange?.([])
    }

    return (
        <div id={props.id} className="mx-[2.25rem] md:mx-[5.25rem] my-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-stone">
                {matchedCategory?.Question ?? props.title}
            </h2>

            {matchedCategory && (
                <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                        {matchedCategory.entry.map(entry => {
                            const isSelected = selectedValue === entry.value
                            return (
                                <button
                                    key={entry.value}
                                    type="button"
                                    onClick={() => toggleValue(entry.value)}
                                    className={`
                                        relative flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-200
                                        ${isSelected
                                            ? 'border-stone bg-stone/10 shadow-md'
                                            : 'border-gray-300 bg-white hover:border-stone/50'
                                        }
                                    `}
                                    aria-pressed={isSelected}
                                    aria-label={entry.label}
                                >
                                    {entry.image && (
                                        <span
                                            className="w-6 h-6 rounded-full border-2 border-gray-200 flex-shrink-0 bg-center bg-cover"
                                            aria-hidden="true"
                                            style={{backgroundImage: `url(${entry.image})`}}
                                        />
                                    )}

                                    <span className="text-sm md:text-base font-medium text-stone">
                                        {entry.label}
                                    </span>

                                    {isSelected && (
                                        <span
                                            className="absolute -top-1 -right-1 w-5 h-5 bg-stone rounded-full flex items-center justify-center"
                                            aria-hidden="true"
                                        >
                                            <svg
                                                className="w-3 h-3 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </span>
                                    )}
                                </button>
                            )
                        })}
                    </div>

                    {selectedValue && (
                        <button
                            type="button"
                            onClick={clearAll}
                            className="text-sm text-gray-600 hover:text-stone underline transition-colors duration-200"
                        >
                            Clear all filters
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}

export {GuidedFilters}

