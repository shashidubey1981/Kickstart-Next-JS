'use client'
/* eslint-disable indent, quotes */
import React from 'react'

/**
 * Facet schemas (shape of search facets payload)
 */
export interface FacetEntryExtendedDataSchema {
    image1: string | null
    sequence: string
    uniqueId: string
}

export interface FacetEntrySchema {
    label: string
    value: string
    image?: string
    count: number
    extendedData?: Partial<FacetEntryExtendedDataSchema>
}

export interface FacetExtendedDataSchema {
    name: string
    fdesc: string
    fname: string
    sortorder: string
    propertyId: string
    displayable: string
    max_display: string
    zero_display: string
    propertyvalue: string
    displaySequence: string
    allValuesReturned: string
    maximumValuesToDisplay: string
    allowMultipleValueSelection: string
}

export interface FacetSchema {
    name: string
    value: string
    entry: FacetEntrySchema[]
    extendedData: FacetExtendedDataSchema
    ShowDefaultFilter?: boolean
}

/**
 * Component props
 */
export interface FacetOptionsProps {
    /**
     * Facet data and selection handlers.
     * These are optional in this POC because `FacetOptions` can be rendered
     * from CMS-driven blocks without wiring search state yet.
     */
    facets?: FacetSchema[]
    selectedValue?: string | null
    onToggle?: (value: string) => void
    onClearAll?: () => void
    clearLabel?: string
    slug?: string[]
    /** Allow CMS/live-preview props that are spread in by the renderer. */
    id?: string
    component_name?: string
    $?: unknown
}

// Mock facets payload (useful for local rendering)
const facetOptionsMock: FacetSchema[] = [
    {
      "name": "Color",
      "value": "facets.12545.value.raw",
      "entry": [
        {
          "label": "Orange",
          "value": "facets.12545.value.raw%3A%22Orange%22",
          "image": "/wcsstore/TMWCAS/COLOR_ORANGE",
          "count": 1,
          "extendedData": {
            "image1": "COLOR_ORANGE",
            "sequence": "1.0",
            "uniqueId": "1040401"
          }
        },
        {
          "label": "Brown",
          "value": "facets.12545.value.raw%3A%22Brown%22",
          "image": "/wcsstore/TMWCAS/COLOR_BROWN",
          "count": 12,
          "extendedData": {
            "image1": "COLOR_BROWN",
            "sequence": "1.0",
            "uniqueId": "1040093"
          }
        },
        {
          "label": "Black",
          "value": "facets.12545.value.raw%3A%22Black%22",
          "image": "/wcsstore/TMWCAS/COLOR_BLACK",
          "count": 29,
          "extendedData": {
            "image1": "COLOR_BLACK",
            "sequence": "1.0",
            "uniqueId": "1042900"
          }
        },
        {
          "label": "Gray",
          "value": "facets.12545.value.raw%3A%22Gray%22",
          "image": "/wcsstore/TMWCAS/COLOR_GRAY",
          "count": 46,
          "extendedData": {
            "image1": "COLOR_GRAY",
            "sequence": "1.0",
            "uniqueId": "1039680"
          }
        },
        {
          "label": "Red",
          "value": "facets.12545.value.raw%3A%22Red%22",
          "image": "/wcsstore/TMWCAS/COLOR_RED",
          "count": 1,
          "extendedData": {
            "image1": "COLOR_RED",
            "sequence": "1.0",
            "uniqueId": "1042653"
          }
        },
        {
          "label": "Green",
          "value": "facets.12545.value.raw%3A%22Green%22",
          "image": "/wcsstore/TMWCAS/COLOR_GREEN",
          "count": 8,
          "extendedData": {
            "image1": "COLOR_GREEN",
            "sequence": "1.0",
            "uniqueId": "1041560"
          }
        },
        {
          "label": "Blue",
          "value": "facets.12545.value.raw%3A%22Blue%22",
          "image": "/wcsstore/TMWCAS/COLOR_BLUE",
          "count": 58,
          "extendedData": {
            "image1": "COLOR_BLUE",
            "sequence": "1.0",
            "uniqueId": "1043404"
          }
        },
        {
          "label": "Burgundy",
          "value": "facets.12545.value.raw%3A%22Burgundy%22",
          "image": "/wcsstore/TMWCAS/COLOR_BURGUNDY",
          "count": 3,
          "extendedData": {
            "image1": "COLOR_BURGUNDY",
            "sequence": "1.0",
            "uniqueId": "1041675"
          }
        },
        {
          "label": "White",
          "value": "facets.12545.value.raw%3A%22White%22",
          "image": "/wcsstore/TMWCAS/COLOR_WHITE",
          "count": 3,
          "extendedData": {
            "image1": "COLOR_WHITE",
            "sequence": "1.0",
            "uniqueId": "1040308"
          }
        },
        {
          "label": "Tan",
          "value": "facets.12545.value.raw%3A%22Tan%22",
          "image": "/wcsstore/TMWCAS/COLOR_TAN",
          "count": 9,
          "extendedData": {
            "image1": "COLOR_TAN",
            "sequence": "1.0",
            "uniqueId": "1041464"
          }
        },
        {
          "label": "Pink",
          "value": "facets.12545.value.raw%3A%22Pink%22",
          "image": "/wcsstore/TMWCAS/COLOR_PINK",
          "count": 4,
          "extendedData": {
            "image1": "COLOR_PINK",
            "sequence": "1.0",
            "uniqueId": "1041067"
          }
        },
        {
          "label": "Multi",
          "value": "facets.12545.value.raw%3A%22Multi%22",
          "image": "/wcsstore/TMWCAS/COLOR_MULTI",
          "count": 6,
          "extendedData": {
            "image1": "COLOR_MULTI",
            "sequence": "1.0",
            "uniqueId": "1041366"
          }
        }
      ],
      "extendedData": {
        "name": "Color",
        "fdesc": "Color",
        "fname": "Color",
        "sortorder": "0",
        "propertyId": "12545",
        "displayable": "true",
        "max_display": "-1",
        "zero_display": "false",
        "propertyvalue": "ColorFamily",
        "displaySequence": "2.0",
        "allValuesReturned": "true",
        "maximumValuesToDisplay": "-1",
        "allowMultipleValueSelection": "true"
      },
      "ShowDefaultFilter": true
    },
    {
      "name": "Fit",
      "value": "facets.12531.value.raw",
      "entry": [
        {
          "label": "Skinny Fit",
          "value": "facets.12531.value.raw%3A%22Skinny+Fit%22",
          "image": "",
          "count": 8,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "4655079"
          }
        },
        {
          "label": "Executive Fit",
          "value": "facets.12531.value.raw%3A%22Executive+Fit%22",
          "image": "",
          "count": 4,
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
          "count": 45,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1044516"
          }
        },
        {
          "label": "Slim Fit",
          "value": "facets.12531.value.raw%3A%22Slim+Fit%22",
          "image": "",
          "count": 46,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1042871"
          }
        },
        {
          "label": "Classic Fit",
          "value": "facets.12531.value.raw%3A%22Classic+Fit%22",
          "image": "",
          "count": 15,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1041974"
          }
        }
      ],
      "extendedData": {
        "name": "Fit",
        "fdesc": "Fit",
        "fname": "Fit",
        "sortorder": "0",
        "propertyId": "12531",
        "displayable": "true",
        "max_display": "-1",
        "zero_display": "false",
        "propertyvalue": "Fit",
        "displaySequence": "14.0",
        "allValuesReturned": "true",
        "maximumValuesToDisplay": "-1",
        "allowMultipleValueSelection": "true"
      }
    },
    {
      "name": "Size",
      "value": "facets.12515.value.raw",
      "entry": [
        {
          "label": "Pants_28W x 29L",
          "value": "facets.12515.value.raw%3A%22Pants_28W+x+29L%22",
          "image": "/wcsstore/TMWCAS/Pants_28W x 29L",
          "count": 1,
          "extendedData": {
            "image1": "Pants_28W x 29L",
            "sequence": "1011.0",
            "uniqueId": "1042351"
          }
        },
        {
          "label": "Pants_28W x 30L",
          "value": "facets.12515.value.raw%3A%22Pants_28W+x+30L%22",
          "image": "/wcsstore/TMWCAS/Pants_28W x 30L",
          "count": 7,
          "extendedData": {
            "image1": "Pants_28W x 30L",
            "sequence": "1012.0",
            "uniqueId": "1043556"
          }
        },
        {
          "label": "Pants_28W x 32L",
          "value": "facets.12515.value.raw%3A%22Pants_28W+x+32L%22",
          "image": "/wcsstore/TMWCAS/Pants_28W x 32L",
          "count": 13,
          "extendedData": {
            "image1": "Pants_28W x 32L",
            "sequence": "1013.0",
            "uniqueId": "1041351"
          }
        },
        {
          "label": "Pants_28W x 34L",
          "value": "facets.12515.value.raw%3A%22Pants_28W+x+34L%22",
          "image": "/wcsstore/TMWCAS/Pants_28W x 34L",
          "count": 4,
          "extendedData": {
            "image1": "Pants_28W x 34L",
            "sequence": "1014.0",
            "uniqueId": "1040387"
          }
        },
        {
          "label": "Pants_29W x 29L",
          "value": "facets.12515.value.raw%3A%22Pants_29W+x+29L%22",
          "image": "/wcsstore/TMWCAS/Pants_29W x 29L",
          "count": 1,
          "extendedData": {
            "image1": "Pants_29W x 29L",
            "sequence": "1021.0",
            "uniqueId": "1039107"
          }
        },
        {
          "label": "Pants_29W x 30L",
          "value": "facets.12515.value.raw%3A%22Pants_29W+x+30L%22",
          "image": "/wcsstore/TMWCAS/Pants_29W x 30L",
          "count": 32,
          "extendedData": {
            "image1": "Pants_29W x 30L",
            "sequence": "1022.0",
            "uniqueId": "1039797"
          }
        },
        {
          "label": "Pants_29W x 32L",
          "value": "facets.12515.value.raw%3A%22Pants_29W+x+32L%22",
          "image": "/wcsstore/TMWCAS/Pants_29W x 32L",
          "count": 25,
          "extendedData": {
            "image1": "Pants_29W x 32L",
            "sequence": "1023.0",
            "uniqueId": "1039137"
          }
        },
        {
          "label": "Pants_29W x 34L",
          "value": "facets.12515.value.raw%3A%22Pants_29W+x+34L%22",
          "image": "/wcsstore/TMWCAS/Pants_29W x 34L",
          "count": 12,
          "extendedData": {
            "image1": "Pants_29W x 34L",
            "sequence": "1024.0",
            "uniqueId": "1041097"
          }
        },
        {
          "label": "Pants_30",
          "value": "facets.12515.value.raw%3A%22Pants_30%22",
          "image": "/wcsstore/TMWCAS/Pants_30",
          "count": 1,
          "extendedData": {
            "image1": "Pants_30",
            "sequence": "1030.0",
            "uniqueId": "1043760"
          }
        },
        {
          "label": "Pants_30W x 29L",
          "value": "facets.12515.value.raw%3A%22Pants_30W+x+29L%22",
          "image": "/wcsstore/TMWCAS/Pants_30W x 29L",
          "count": 2,
          "extendedData": {
            "image1": "Pants_30W x 29L",
            "sequence": "1031.0",
            "uniqueId": "1042495"
          }
        },
        {
          "label": "Pants_30W x 30L",
          "value": "facets.12515.value.raw%3A%22Pants_30W+x+30L%22",
          "image": "/wcsstore/TMWCAS/Pants_30W x 30L",
          "count": 59,
          "extendedData": {
            "image1": "Pants_30W x 30L",
            "sequence": "1032.0",
            "uniqueId": "1040157"
          }
        },
        {
          "label": "Pants_30W x 32L",
          "value": "facets.12515.value.raw%3A%22Pants_30W+x+32L%22",
          "image": "/wcsstore/TMWCAS/Pants_30W x 32L",
          "count": 58,
          "extendedData": {
            "image1": "Pants_30W x 32L",
            "sequence": "1033.0",
            "uniqueId": "1044519"
          }
        },
        {
          "label": "Pants_30W x 34L",
          "value": "facets.12515.value.raw%3A%22Pants_30W+x+34L%22",
          "image": "/wcsstore/TMWCAS/Pants_30W x 34L",
          "count": 11,
          "extendedData": {
            "image1": "Pants_30W x 34L",
            "sequence": "1034.0",
            "uniqueId": "1043277"
          }
        },
        {
          "label": "Pants_31W x 30L",
          "value": "facets.12515.value.raw%3A%22Pants_31W+x+30L%22",
          "image": "/wcsstore/TMWCAS/Pants_31W x 30L",
          "count": 9,
          "extendedData": {
            "image1": "Pants_31W x 30L",
            "sequence": "1041.0",
            "uniqueId": "1039934"
          }
        },
        {
          "label": "Pants_31W x 32L",
          "value": "facets.12515.value.raw%3A%22Pants_31W+x+32L%22",
          "image": "/wcsstore/TMWCAS/Pants_31W x 32L",
          "count": 11,
          "extendedData": {
            "image1": "Pants_31W x 32L",
            "sequence": "1042.0",
            "uniqueId": "1042178"
          }
        },
        {
          "label": "Pants_31W x 34L",
          "value": "facets.12515.value.raw%3A%22Pants_31W+x+34L%22",
          "image": "/wcsstore/TMWCAS/Pants_31W x 34L",
          "count": 1,
          "extendedData": {
            "image1": "Pants_31W x 34L",
            "sequence": "1043.0",
            "uniqueId": "1040819"
          }
        },
        {
          "label": "Pants_32",
          "value": "facets.12515.value.raw%3A%22Pants_32%22",
          "image": "/wcsstore/TMWCAS/Pants_32",
          "count": 2,
          "extendedData": {
            "image1": "Pants_32",
            "sequence": "1050.0",
            "uniqueId": "1040005"
          }
        },
        {
          "label": "Pants_32W x 29L",
          "value": "facets.12515.value.raw%3A%22Pants_32W+x+29L%22",
          "image": "/wcsstore/TMWCAS/Pants_32W x 29L",
          "count": 4,
          "extendedData": {
            "image1": "Pants_32W x 29L",
            "sequence": "1051.0",
            "uniqueId": "1042841"
          }
        },
        {
          "label": "Pants_32W x 30L",
          "value": "facets.12515.value.raw%3A%22Pants_32W+x+30L%22",
          "image": "/wcsstore/TMWCAS/Pants_32W x 30L",
          "count": 70,
          "extendedData": {
            "image1": "Pants_32W x 30L",
            "sequence": "1052.0",
            "uniqueId": "1042480"
          }
        },
        {
          "label": "Pants_32W x 32L",
          "value": "facets.12515.value.raw%3A%22Pants_32W+x+32L%22",
          "image": "/wcsstore/TMWCAS/Pants_32W x 32L",
          "count": 80,
          "extendedData": {
            "image1": "Pants_32W x 32L",
            "sequence": "1053.0",
            "uniqueId": "1041431"
          }
        },
        {
          "label": "Pants_32W x 34L",
          "value": "facets.12515.value.raw%3A%22Pants_32W+x+34L%22",
          "image": "/wcsstore/TMWCAS/Pants_32W x 34L",
          "count": 34,
          "extendedData": {
            "image1": "Pants_32W x 34L",
            "sequence": "1054.0",
            "uniqueId": "1041752"
          }
        },
        {
          "label": "Pants_33",
          "value": "facets.12515.value.raw%3A%22Pants_33%22",
          "image": "/wcsstore/TMWCAS/Pants_33",
          "count": 1,
          "extendedData": {
            "image1": "Pants_33",
            "sequence": "1060.0",
            "uniqueId": "1042731"
          }
        },
        {
          "label": "Pants_33W x 30L",
          "value": "facets.12515.value.raw%3A%22Pants_33W+x+30L%22",
          "image": "/wcsstore/TMWCAS/Pants_33W x 30L",
          "count": 58,
          "extendedData": {
            "image1": "Pants_33W x 30L",
            "sequence": "1061.0",
            "uniqueId": "1040812"
          }
        },
        {
          "label": "Pants_33W x 32L",
          "value": "facets.12515.value.raw%3A%22Pants_33W+x+32L%22",
          "image": "/wcsstore/TMWCAS/Pants_33W x 32L",
          "count": 59,
          "extendedData": {
            "image1": "Pants_33W x 32L",
            "sequence": "1062.0",
            "uniqueId": "1039669"
          }
        },
        {
          "label": "Pants_33W x 34L",
          "value": "facets.12515.value.raw%3A%22Pants_33W+x+34L%22",
          "image": "/wcsstore/TMWCAS/Pants_33W x 34L",
          "count": 19,
          "extendedData": {
            "image1": "Pants_33W x 34L",
            "sequence": "1063.0",
            "uniqueId": "1042505"
          }
        },
        {
          "label": "Pants_34",
          "value": "facets.12515.value.raw%3A%22Pants_34%22",
          "image": "/wcsstore/TMWCAS/Pants_34",
          "count": 2,
          "extendedData": {
            "image1": "Pants_34",
            "sequence": "1070.0",
            "uniqueId": "1040159"
          }
        },
        {
          "label": "Pants_34W x 29L",
          "value": "facets.12515.value.raw%3A%22Pants_34W+x+29L%22",
          "image": "/wcsstore/TMWCAS/Pants_34W x 29L",
          "count": 12,
          "extendedData": {
            "image1": "Pants_34W x 29L",
            "sequence": "1071.0",
            "uniqueId": "1042131"
          }
        },
        {
          "label": "Pants_34W x 30L",
          "value": "facets.12515.value.raw%3A%22Pants_34W+x+30L%22",
          "image": "/wcsstore/TMWCAS/Pants_34W x 30L",
          "count": 77,
          "extendedData": {
            "image1": "Pants_34W x 30L",
            "sequence": "1072.0",
            "uniqueId": "1039854"
          }
        },
        {
          "label": "Pants_34W x 32L",
          "value": "facets.12515.value.raw%3A%22Pants_34W+x+32L%22",
          "image": "/wcsstore/TMWCAS/Pants_34W x 32L",
          "count": 82,
          "extendedData": {
            "image1": "Pants_34W x 32L",
            "sequence": "1074.0",
            "uniqueId": "1039994"
          }
        },
        {
          "label": "Pants_34W x 34L",
          "value": "facets.12515.value.raw%3A%22Pants_34W+x+34L%22",
          "image": "/wcsstore/TMWCAS/Pants_34W x 34L",
          "count": 53,
          "extendedData": {
            "image1": "Pants_34W x 34L",
            "sequence": "1075.0",
            "uniqueId": "1043076"
          }
        },
        {
          "label": "Pants_34W x 36L",
          "value": "facets.12515.value.raw%3A%22Pants_34W+x+36L%22",
          "image": "/wcsstore/TMWCAS/Pants_34W x 36L",
          "count": 10,
          "extendedData": {
            "image1": "Pants_34W x 36L",
            "sequence": "1076.0",
            "uniqueId": "1043604"
          }
        },
        {
          "label": "Pants_35W x 30L",
          "value": "facets.12515.value.raw%3A%22Pants_35W+x+30L%22",
          "image": "/wcsstore/TMWCAS/Pants_35W x 30L",
          "count": 1,
          "extendedData": {
            "image1": "Pants_35W x 30L",
            "sequence": "1081.0",
            "uniqueId": "1040149"
          }
        },
        {
          "label": "Pants_35W x 32L",
          "value": "facets.12515.value.raw%3A%22Pants_35W+x+32L%22",
          "image": "/wcsstore/TMWCAS/Pants_35W x 32L",
          "count": 10,
          "extendedData": {
            "image1": "Pants_35W x 32L",
            "sequence": "1083.0",
            "uniqueId": "1041902"
          }
        },
        {
          "label": "Pants_35W x 34L",
          "value": "facets.12515.value.raw%3A%22Pants_35W+x+34L%22",
          "image": "/wcsstore/TMWCAS/Pants_35W x 34L",
          "count": 2,
          "extendedData": {
            "image1": "Pants_35W x 34L",
            "sequence": "1084.0",
            "uniqueId": "1040886"
          }
        },
        {
          "label": "Pants_36",
          "value": "facets.12515.value.raw%3A%22Pants_36%22",
          "image": "/wcsstore/TMWCAS/Pants_36",
          "count": 1,
          "extendedData": {
            "image1": "Pants_36",
            "sequence": "1090.0",
            "uniqueId": "1040574"
          }
        },
        {
          "label": "Pants_36W x 29L",
          "value": "facets.12515.value.raw%3A%22Pants_36W+x+29L%22",
          "image": "/wcsstore/TMWCAS/Pants_36W x 29L",
          "count": 14,
          "extendedData": {
            "image1": "Pants_36W x 29L",
            "sequence": "1091.0",
            "uniqueId": "1039507"
          }
        },
        {
          "label": "Pants_36W x 30L",
          "value": "facets.12515.value.raw%3A%22Pants_36W+x+30L%22",
          "image": "/wcsstore/TMWCAS/Pants_36W x 30L",
          "count": 74,
          "extendedData": {
            "image1": "Pants_36W x 30L",
            "sequence": "1092.0",
            "uniqueId": "1044508"
          }
        },
        {
          "label": "Pants_36W x 32L",
          "value": "facets.12515.value.raw%3A%22Pants_36W+x+32L%22",
          "image": "/wcsstore/TMWCAS/Pants_36W x 32L",
          "count": 85,
          "extendedData": {
            "image1": "Pants_36W x 32L",
            "sequence": "1093.0",
            "uniqueId": "1041136"
          }
        },
        {
          "label": "Pants_36W x 34L",
          "value": "facets.12515.value.raw%3A%22Pants_36W+x+34L%22",
          "image": "/wcsstore/TMWCAS/Pants_36W x 34L",
          "count": 53,
          "extendedData": {
            "image1": "Pants_36W x 34L",
            "sequence": "1094.0",
            "uniqueId": "1039927"
          }
        },
        {
          "label": "Pants_36W x 36L",
          "value": "facets.12515.value.raw%3A%22Pants_36W+x+36L%22",
          "image": "/wcsstore/TMWCAS/Pants_36W x 36L",
          "count": 12,
          "extendedData": {
            "image1": "Pants_36W x 36L",
            "sequence": "1095.0",
            "uniqueId": "1043729"
          }
        },
        {
          "label": "Pants_38",
          "value": "facets.12515.value.raw%3A%22Pants_38%22",
          "image": "/wcsstore/TMWCAS/Pants_38",
          "count": 1,
          "extendedData": {
            "image1": "Pants_38",
            "sequence": "1110.0",
            "uniqueId": "1040275"
          }
        },
        {
          "label": "Pants_38W x 29L",
          "value": "facets.12515.value.raw%3A%22Pants_38W+x+29L%22",
          "image": "/wcsstore/TMWCAS/Pants_38W x 29L",
          "count": 14,
          "extendedData": {
            "image1": "Pants_38W x 29L",
            "sequence": "1111.0",
            "uniqueId": "1039896"
          }
        },
        {
          "label": "Pants_38W x 30L",
          "value": "facets.12515.value.raw%3A%22Pants_38W+x+30L%22",
          "image": "/wcsstore/TMWCAS/Pants_38W x 30L",
          "count": 75,
          "extendedData": {
            "image1": "Pants_38W x 30L",
            "sequence": "1112.0",
            "uniqueId": "1041094"
          }
        },
        {
          "label": "Pants_38W x 32L",
          "value": "facets.12515.value.raw%3A%22Pants_38W+x+32L%22",
          "image": "/wcsstore/TMWCAS/Pants_38W x 32L",
          "count": 84,
          "extendedData": {
            "image1": "Pants_38W x 32L",
            "sequence": "1114.0",
            "uniqueId": "1042134"
          }
        },
        {
          "label": "Pants_38W x 34L",
          "value": "facets.12515.value.raw%3A%22Pants_38W+x+34L%22",
          "image": "/wcsstore/TMWCAS/Pants_38W x 34L",
          "count": 51,
          "extendedData": {
            "image1": "Pants_38W x 34L",
            "sequence": "1115.0",
            "uniqueId": "1040259"
          }
        },
        {
          "label": "Pants_38W x 36L",
          "value": "facets.12515.value.raw%3A%22Pants_38W+x+36L%22",
          "image": "/wcsstore/TMWCAS/Pants_38W x 36L",
          "count": 8,
          "extendedData": {
            "image1": "Pants_38W x 36L",
            "sequence": "1116.0",
            "uniqueId": "1042693"
          }
        },
        {
          "label": "Pants_39W x 30L",
          "value": "facets.12515.value.raw%3A%22Pants_39W+x+30L%22",
          "image": "/wcsstore/TMWCAS/Pants_39W x 30L",
          "count": 4,
          "extendedData": {
            "image1": "Pants_39W x 30L",
            "sequence": "1121.0",
            "uniqueId": "1039224"
          }
        },
        {
          "label": "Pants_40",
          "value": "facets.12515.value.raw%3A%22Pants_40%22",
          "image": "/wcsstore/TMWCAS/Pants_40",
          "count": 2,
          "extendedData": {
            "image1": "Pants_40",
            "sequence": "1130.0",
            "uniqueId": "1041535"
          }
        },
        {
          "label": "Pants_40W x 29L",
          "value": "facets.12515.value.raw%3A%22Pants_40W+x+29L%22",
          "image": "/wcsstore/TMWCAS/Pants_40W x 29L",
          "count": 10,
          "extendedData": {
            "image1": "Pants_40W x 29L",
            "sequence": "1131.0",
            "uniqueId": "1040305"
          }
        },
        {
          "label": "Pants_40W x 30L",
          "value": "facets.12515.value.raw%3A%22Pants_40W+x+30L%22",
          "image": "/wcsstore/TMWCAS/Pants_40W x 30L",
          "count": 76,
          "extendedData": {
            "image1": "Pants_40W x 30L",
            "sequence": "1132.0",
            "uniqueId": "1041145"
          }
        },
        {
          "label": "Pants_40W x 32L",
          "value": "facets.12515.value.raw%3A%22Pants_40W+x+32L%22",
          "image": "/wcsstore/TMWCAS/Pants_40W x 32L",
          "count": 84,
          "extendedData": {
            "image1": "Pants_40W x 32L",
            "sequence": "1134.0",
            "uniqueId": "1043248"
          }
        },
        {
          "label": "Pants_40W x 34L",
          "value": "facets.12515.value.raw%3A%22Pants_40W+x+34L%22",
          "image": "/wcsstore/TMWCAS/Pants_40W x 34L",
          "count": 33,
          "extendedData": {
            "image1": "Pants_40W x 34L",
            "sequence": "1135.0",
            "uniqueId": "1043830"
          }
        },
        {
          "label": "Pants_40W x 36L",
          "value": "facets.12515.value.raw%3A%22Pants_40W+x+36L%22",
          "image": "/wcsstore/TMWCAS/Pants_40W x 36L",
          "count": 9,
          "extendedData": {
            "image1": "Pants_40W x 36L",
            "sequence": "1136.0",
            "uniqueId": "1039767"
          }
        },
        {
          "label": "Pants_42",
          "value": "facets.12515.value.raw%3A%22Pants_42%22",
          "image": "/wcsstore/TMWCAS/Pants_42",
          "count": 2,
          "extendedData": {
            "image1": "Pants_42",
            "sequence": "1150.0",
            "uniqueId": "1042097"
          }
        },
        {
          "label": "Pants_42W x 29L",
          "value": "facets.12515.value.raw%3A%22Pants_42W+x+29L%22",
          "image": "/wcsstore/TMWCAS/Pants_42W x 29L",
          "count": 5,
          "extendedData": {
            "image1": "Pants_42W x 29L",
            "sequence": "1151.0",
            "uniqueId": "1041985"
          }
        },
        {
          "label": "Pants_42W x 30L",
          "value": "facets.12515.value.raw%3A%22Pants_42W+x+30L%22",
          "image": "/wcsstore/TMWCAS/Pants_42W x 30L",
          "count": 67,
          "extendedData": {
            "image1": "Pants_42W x 30L",
            "sequence": "1152.0",
            "uniqueId": "1043195"
          }
        },
        {
          "label": "Pants_42W x 32L",
          "value": "facets.12515.value.raw%3A%22Pants_42W+x+32L%22",
          "image": "/wcsstore/TMWCAS/Pants_42W x 32L",
          "count": 80,
          "extendedData": {
            "image1": "Pants_42W x 32L",
            "sequence": "1153.0",
            "uniqueId": "1040233"
          }
        },
        {
          "label": "Pants_42W x 34L",
          "value": "facets.12515.value.raw%3A%22Pants_42W+x+34L%22",
          "image": "/wcsstore/TMWCAS/Pants_42W x 34L",
          "count": 20,
          "extendedData": {
            "image1": "Pants_42W x 34L",
            "sequence": "1154.0",
            "uniqueId": "1040089"
          }
        },
        {
          "label": "Pants_42W x 36L",
          "value": "facets.12515.value.raw%3A%22Pants_42W+x+36L%22",
          "image": "/wcsstore/TMWCAS/Pants_42W x 36L",
          "count": 11,
          "extendedData": {
            "image1": "Pants_42W x 36L",
            "sequence": "1155.0",
            "uniqueId": "1044530"
          }
        },
        {
          "label": "Suits_34 Short",
          "value": "facets.12515.value.raw%3A%22Suits_34+Short%22",
          "image": "/wcsstore/TMWCAS/Suits_34 Short",
          "count": 8,
          "extendedData": {
            "image1": "Suits_34 Short",
            "sequence": "1500.0",
            "uniqueId": "1039695"
          }
        },
        {
          "label": "Suits_34 Regular",
          "value": "facets.12515.value.raw%3A%22Suits_34+Regular%22",
          "image": "/wcsstore/TMWCAS/Suits_34 Regular",
          "count": 14,
          "extendedData": {
            "image1": "Suits_34 Regular",
            "sequence": "1501.0",
            "uniqueId": "1043212"
          }
        },
        {
          "label": "Suits_35 Short",
          "value": "facets.12515.value.raw%3A%22Suits_35+Short%22",
          "image": "/wcsstore/TMWCAS/Suits_35 Short",
          "count": 17,
          "extendedData": {
            "image1": "Suits_35 Short",
            "sequence": "1600.0",
            "uniqueId": "1041823"
          }
        },
        {
          "label": "Suits_35 Regular",
          "value": "facets.12515.value.raw%3A%22Suits_35+Regular%22",
          "image": "/wcsstore/TMWCAS/Suits_35 Regular",
          "count": 11,
          "extendedData": {
            "image1": "Suits_35 Regular",
            "sequence": "1601.0",
            "uniqueId": "1040310"
          }
        },
        {
          "label": "Suits_36 Short",
          "value": "facets.12515.value.raw%3A%22Suits_36+Short%22",
          "image": "/wcsstore/TMWCAS/Suits_36 Short",
          "count": 57,
          "extendedData": {
            "image1": "Suits_36 Short",
            "sequence": "1700.0",
            "uniqueId": "1042190"
          }
        },
        {
          "label": "Suits_36 Regular",
          "value": "facets.12515.value.raw%3A%22Suits_36+Regular%22",
          "image": "/wcsstore/TMWCAS/Suits_36 Regular",
          "count": 73,
          "extendedData": {
            "image1": "Suits_36 Regular",
            "sequence": "1701.0",
            "uniqueId": "1042520"
          }
        },
        {
          "label": "Suits_36 Long",
          "value": "facets.12515.value.raw%3A%22Suits_36+Long%22",
          "image": "/wcsstore/TMWCAS/Suits_36 Long",
          "count": 9,
          "extendedData": {
            "image1": "Suits_36 Long",
            "sequence": "1702.0",
            "uniqueId": "1039726"
          }
        },
        {
          "label": "Suits_37 Short",
          "value": "facets.12515.value.raw%3A%22Suits_37+Short%22",
          "image": "/wcsstore/TMWCAS/Suits_37 Short",
          "count": 3,
          "extendedData": {
            "image1": "Suits_37 Short",
            "sequence": "1800.0",
            "uniqueId": "1043067"
          }
        },
        {
          "label": "Suits_37 Regular",
          "value": "facets.12515.value.raw%3A%22Suits_37+Regular%22",
          "image": "/wcsstore/TMWCAS/Suits_37 Regular",
          "count": 3,
          "extendedData": {
            "image1": "Suits_37 Regular",
            "sequence": "1801.0",
            "uniqueId": "1039082"
          }
        },
        {
          "label": "Suits_37 Long",
          "value": "facets.12515.value.raw%3A%22Suits_37+Long%22",
          "image": "/wcsstore/TMWCAS/Suits_37 Long",
          "count": 3,
          "extendedData": {
            "image1": "Suits_37 Long",
            "sequence": "1802.0",
            "uniqueId": "1041699"
          }
        },
        {
          "label": "Suits_38 Short",
          "value": "facets.12515.value.raw%3A%22Suits_38+Short%22",
          "image": "/wcsstore/TMWCAS/Suits_38 Short",
          "count": 69,
          "extendedData": {
            "image1": "Suits_38 Short",
            "sequence": "1900.0",
            "uniqueId": "1042756"
          }
        },
        {
          "label": "Suits_38 Regular",
          "value": "facets.12515.value.raw%3A%22Suits_38+Regular%22",
          "image": "/wcsstore/TMWCAS/Suits_38 Regular",
          "count": 94,
          "extendedData": {
            "image1": "Suits_38 Regular",
            "sequence": "1901.0",
            "uniqueId": "1040237"
          }
        },
        {
          "label": "Suits_38 Long",
          "value": "facets.12515.value.raw%3A%22Suits_38+Long%22",
          "image": "/wcsstore/TMWCAS/Suits_38 Long",
          "count": 46,
          "extendedData": {
            "image1": "Suits_38 Long",
            "sequence": "1902.0",
            "uniqueId": "1041721"
          }
        },
        {
          "label": "Suits_39 Short",
          "value": "facets.12515.value.raw%3A%22Suits_39+Short%22",
          "image": "/wcsstore/TMWCAS/Suits_39 Short",
          "count": 7,
          "extendedData": {
            "image1": "Suits_39 Short",
            "sequence": "2000.0",
            "uniqueId": "1043582"
          }
        },
        {
          "label": "Suits_39 Regular",
          "value": "facets.12515.value.raw%3A%22Suits_39+Regular%22",
          "image": "/wcsstore/TMWCAS/Suits_39 Regular",
          "count": 8,
          "extendedData": {
            "image1": "Suits_39 Regular",
            "sequence": "2001.0",
            "uniqueId": "1039499"
          }
        },
        {
          "label": "Suits_39 Long",
          "value": "facets.12515.value.raw%3A%22Suits_39+Long%22",
          "image": "/wcsstore/TMWCAS/Suits_39 Long",
          "count": 1,
          "extendedData": {
            "image1": "Suits_39 Long",
            "sequence": "2002.0",
            "uniqueId": "1039880"
          }
        },
        {
          "label": "Pants_44",
          "value": "facets.12515.value.raw%3A%22Pants_44%22",
          "image": "/wcsstore/TMWCAS/Pants_44",
          "count": 1,
          "extendedData": {
            "image1": "Pants_44",
            "sequence": "2020.0",
            "uniqueId": "1043594"
          }
        },
        {
          "label": "Pants_44W x 29L",
          "value": "facets.12515.value.raw%3A%22Pants_44W+x+29L%22",
          "image": "/wcsstore/TMWCAS/Pants_44W x 29L",
          "count": 2,
          "extendedData": {
            "image1": "Pants_44W x 29L",
            "sequence": "2021.0",
            "uniqueId": "1042315"
          }
        },
        {
          "label": "Pants_44W x 30L",
          "value": "facets.12515.value.raw%3A%22Pants_44W+x+30L%22",
          "image": "/wcsstore/TMWCAS/Pants_44W x 30L",
          "count": 49,
          "extendedData": {
            "image1": "Pants_44W x 30L",
            "sequence": "2022.0",
            "uniqueId": "1040341"
          }
        },
        {
          "label": "Pants_44W x 32L",
          "value": "facets.12515.value.raw%3A%22Pants_44W+x+32L%22",
          "image": "/wcsstore/TMWCAS/Pants_44W x 32L",
          "count": 55,
          "extendedData": {
            "image1": "Pants_44W x 32L",
            "sequence": "2023.0",
            "uniqueId": "1042339"
          }
        },
        {
          "label": "Pants_44W x 34L",
          "value": "facets.12515.value.raw%3A%22Pants_44W+x+34L%22",
          "image": "/wcsstore/TMWCAS/Pants_44W x 34L",
          "count": 25,
          "extendedData": {
            "image1": "Pants_44W x 34L",
            "sequence": "2024.0",
            "uniqueId": "1041759"
          }
        },
        {
          "label": "Pants_44W x 36L",
          "value": "facets.12515.value.raw%3A%22Pants_44W+x+36L%22",
          "image": "/wcsstore/TMWCAS/Pants_44W x 36L",
          "count": 10,
          "extendedData": {
            "image1": "Pants_44W x 36L",
            "sequence": "2025.0",
            "uniqueId": "1043337"
          }
        },
        {
          "label": "Pants_46",
          "value": "facets.12515.value.raw%3A%22Pants_46%22",
          "image": "/wcsstore/TMWCAS/Pants_46",
          "count": 2,
          "extendedData": {
            "image1": "Pants_46",
            "sequence": "2030.0",
            "uniqueId": "1041557"
          }
        },
        {
          "label": "Pants_46W x 30L",
          "value": "facets.12515.value.raw%3A%22Pants_46W+x+30L%22",
          "image": "/wcsstore/TMWCAS/Pants_46W x 30L",
          "count": 32,
          "extendedData": {
            "image1": "Pants_46W x 30L",
            "sequence": "2032.0",
            "uniqueId": "1041693"
          }
        },
        {
          "label": "Pants_46W x 32L",
          "value": "facets.12515.value.raw%3A%22Pants_46W+x+32L%22",
          "image": "/wcsstore/TMWCAS/Pants_46W x 32L",
          "count": 44,
          "extendedData": {
            "image1": "Pants_46W x 32L",
            "sequence": "2032.0",
            "uniqueId": "1040394"
          }
        },
        {
          "label": "Pants_46W x 34L",
          "value": "facets.12515.value.raw%3A%22Pants_46W+x+34L%22",
          "image": "/wcsstore/TMWCAS/Pants_46W x 34L",
          "count": 18,
          "extendedData": {
            "image1": "Pants_46W x 34L",
            "sequence": "2034.0",
            "uniqueId": "1039966"
          }
        },
        {
          "label": "Pants_48",
          "value": "facets.12515.value.raw%3A%22Pants_48%22",
          "image": "/wcsstore/TMWCAS/Pants_48",
          "count": 1,
          "extendedData": {
            "image1": "Pants_48",
            "sequence": "2040.0",
            "uniqueId": "1041043"
          }
        },
        {
          "label": "Pants_48W x 30L",
          "value": "facets.12515.value.raw%3A%22Pants_48W+x+30L%22",
          "image": "/wcsstore/TMWCAS/Pants_48W x 30L",
          "count": 24,
          "extendedData": {
            "image1": "Pants_48W x 30L",
            "sequence": "2041.0",
            "uniqueId": "1042571"
          }
        },
        {
          "label": "Pants_48W x 32L",
          "value": "facets.12515.value.raw%3A%22Pants_48W+x+32L%22",
          "image": "/wcsstore/TMWCAS/Pants_48W x 32L",
          "count": 31,
          "extendedData": {
            "image1": "Pants_48W x 32L",
            "sequence": "2042.0",
            "uniqueId": "1040746"
          }
        },
        {
          "label": "Pants_48W x 34L",
          "value": "facets.12515.value.raw%3A%22Pants_48W+x+34L%22",
          "image": "/wcsstore/TMWCAS/Pants_48W x 34L",
          "count": 11,
          "extendedData": {
            "image1": "Pants_48W x 34L",
            "sequence": "2043.0",
            "uniqueId": "1043069"
          }
        },
        {
          "label": "Pants_50",
          "value": "facets.12515.value.raw%3A%22Pants_50%22",
          "image": "/wcsstore/TMWCAS/Pants_50",
          "count": 1,
          "extendedData": {
            "image1": "Pants_50",
            "sequence": "2050.0",
            "uniqueId": "1041378"
          }
        },
        {
          "label": "Pants_50W x 30L",
          "value": "facets.12515.value.raw%3A%22Pants_50W+x+30L%22",
          "image": "/wcsstore/TMWCAS/Pants_50W x 30L",
          "count": 20,
          "extendedData": {
            "image1": "Pants_50W x 30L",
            "sequence": "2051.0",
            "uniqueId": "1042664"
          }
        },
        {
          "label": "Pants_50W x 32L",
          "value": "facets.12515.value.raw%3A%22Pants_50W+x+32L%22",
          "image": "/wcsstore/TMWCAS/Pants_50W x 32L",
          "count": 28,
          "extendedData": {
            "image1": "Pants_50W x 32L",
            "sequence": "2052.0",
            "uniqueId": "1042576"
          }
        },
        {
          "label": "Pants_50W x 34L",
          "value": "facets.12515.value.raw%3A%22Pants_50W+x+34L%22",
          "image": "/wcsstore/TMWCAS/Pants_50W x 34L",
          "count": 18,
          "extendedData": {
            "image1": "Pants_50W x 34L",
            "sequence": "2053.0",
            "uniqueId": "1041514"
          }
        },
        {
          "label": "Pants_52",
          "value": "facets.12515.value.raw%3A%22Pants_52%22",
          "image": "/wcsstore/TMWCAS/Pants_52",
          "count": 1,
          "extendedData": {
            "image1": "Pants_52",
            "sequence": "2060.0",
            "uniqueId": "1042671"
          }
        },
        {
          "label": "Pants_52W x 30L",
          "value": "facets.12515.value.raw%3A%22Pants_52W+x+30L%22",
          "image": "/wcsstore/TMWCAS/Pants_52W x 30L",
          "count": 16,
          "extendedData": {
            "image1": "Pants_52W x 30L",
            "sequence": "2061.0",
            "uniqueId": "1042460"
          }
        },
        {
          "label": "Pants_52W x 32L",
          "value": "facets.12515.value.raw%3A%22Pants_52W+x+32L%22",
          "image": "/wcsstore/TMWCAS/Pants_52W x 32L",
          "count": 24,
          "extendedData": {
            "image1": "Pants_52W x 32L",
            "sequence": "2062.0",
            "uniqueId": "1042615"
          }
        },
        {
          "label": "Pants_52W x 34L",
          "value": "facets.12515.value.raw%3A%22Pants_52W+x+34L%22",
          "image": "/wcsstore/TMWCAS/Pants_52W x 34L",
          "count": 16,
          "extendedData": {
            "image1": "Pants_52W x 34L",
            "sequence": "2063.0",
            "uniqueId": "1041443"
          }
        },
        {
          "label": "Pants_54",
          "value": "facets.12515.value.raw%3A%22Pants_54%22",
          "image": "/wcsstore/TMWCAS/Pants_54",
          "count": 1,
          "extendedData": {
            "image1": "Pants_54",
            "sequence": "2070.0",
            "uniqueId": "1042690"
          }
        },
        {
          "label": "Pants_54W x 30L",
          "value": "facets.12515.value.raw%3A%22Pants_54W+x+30L%22",
          "image": "/wcsstore/TMWCAS/Pants_54W x 30L",
          "count": 14,
          "extendedData": {
            "image1": "Pants_54W x 30L",
            "sequence": "2071.0",
            "uniqueId": "1041269"
          }
        },
        {
          "label": "Pants_54W x 32L",
          "value": "facets.12515.value.raw%3A%22Pants_54W+x+32L%22",
          "image": "/wcsstore/TMWCAS/Pants_54W x 32L",
          "count": 27,
          "extendedData": {
            "image1": "Pants_54W x 32L",
            "sequence": "2072.0",
            "uniqueId": "1042971"
          }
        },
        {
          "label": "Pants_54W x 34L",
          "value": "facets.12515.value.raw%3A%22Pants_54W+x+34L%22",
          "image": "/wcsstore/TMWCAS/Pants_54W x 34L",
          "count": 14,
          "extendedData": {
            "image1": "Pants_54W x 34L",
            "sequence": "2073.0",
            "uniqueId": "1043102"
          }
        },
        {
          "label": "Pants_56",
          "value": "facets.12515.value.raw%3A%22Pants_56%22",
          "image": "/wcsstore/TMWCAS/Pants_56",
          "count": 1,
          "extendedData": {
            "image1": "Pants_56",
            "sequence": "2080.0",
            "uniqueId": "1039275"
          }
        },
        {
          "label": "Pants_56W x 30L",
          "value": "facets.12515.value.raw%3A%22Pants_56W+x+30L%22",
          "image": "/wcsstore/TMWCAS/Pants_56W x 30L",
          "count": 4,
          "extendedData": {
            "image1": "Pants_56W x 30L",
            "sequence": "2081.0",
            "uniqueId": "1042066"
          }
        },
        {
          "label": "Pants_56W x 32L",
          "value": "facets.12515.value.raw%3A%22Pants_56W+x+32L%22",
          "image": "/wcsstore/TMWCAS/Pants_56W x 32L",
          "count": 7,
          "extendedData": {
            "image1": "Pants_56W x 32L",
            "sequence": "2082.0",
            "uniqueId": "1043144"
          }
        },
        {
          "label": "Suits_40 Short",
          "value": "facets.12515.value.raw%3A%22Suits_40+Short%22",
          "image": "/wcsstore/TMWCAS/Suits_40 Short",
          "count": 79,
          "extendedData": {
            "image1": "Suits_40 Short",
            "sequence": "2100.0",
            "uniqueId": "1040273"
          }
        },
        {
          "label": "Pants_60",
          "value": "facets.12515.value.raw%3A%22Pants_60%22",
          "image": "/wcsstore/TMWCAS/Pants_60",
          "count": 2,
          "extendedData": {
            "image1": "Pants_60",
            "sequence": "2100.0",
            "uniqueId": "1043355"
          }
        },
        {
          "label": "Suits_40 Regular",
          "value": "facets.12515.value.raw%3A%22Suits_40+Regular%22",
          "image": "/wcsstore/TMWCAS/Suits_40 Regular",
          "count": 91,
          "extendedData": {
            "image1": "Suits_40 Regular",
            "sequence": "2101.0",
            "uniqueId": "1042093"
          }
        },
        {
          "label": "Suits_40 Long",
          "value": "facets.12515.value.raw%3A%22Suits_40+Long%22",
          "image": "/wcsstore/TMWCAS/Suits_40 Long",
          "count": 72,
          "extendedData": {
            "image1": "Suits_40 Long",
            "sequence": "2102.0",
            "uniqueId": "1042349"
          }
        },
        {
          "label": "Suits_41 Regular",
          "value": "facets.12515.value.raw%3A%22Suits_41+Regular%22",
          "image": "/wcsstore/TMWCAS/Suits_41 Regular",
          "count": 7,
          "extendedData": {
            "image1": "Suits_41 Regular",
            "sequence": "2201.0",
            "uniqueId": "1040183"
          }
        },
        {
          "label": "Suits_42 Short",
          "value": "facets.12515.value.raw%3A%22Suits_42+Short%22",
          "image": "/wcsstore/TMWCAS/Suits_42 Short",
          "count": 82,
          "extendedData": {
            "image1": "Suits_42 Short",
            "sequence": "2300.0",
            "uniqueId": "1041353"
          }
        },
        {
          "label": "Suits_42 Regular",
          "value": "facets.12515.value.raw%3A%22Suits_42+Regular%22",
          "image": "/wcsstore/TMWCAS/Suits_42 Regular",
          "count": 90,
          "extendedData": {
            "image1": "Suits_42 Regular",
            "sequence": "2301.0",
            "uniqueId": "1042661"
          }
        },
        {
          "label": "Suits_42 Long",
          "value": "facets.12515.value.raw%3A%22Suits_42+Long%22",
          "image": "/wcsstore/TMWCAS/Suits_42 Long",
          "count": 89,
          "extendedData": {
            "image1": "Suits_42 Long",
            "sequence": "2302.0",
            "uniqueId": "1041178"
          }
        },
        {
          "label": "Suits_42 Extra Long",
          "value": "facets.12515.value.raw%3A%22Suits_42+Extra+Long%22",
          "image": "/wcsstore/TMWCAS/Suits_42 Extra Long",
          "count": 28,
          "extendedData": {
            "image1": "Suits_42 Extra Long",
            "sequence": "2303.0",
            "uniqueId": "1043236"
          }
        },
        {
          "label": "Suits_43 Regular",
          "value": "facets.12515.value.raw%3A%22Suits_43+Regular%22",
          "image": "/wcsstore/TMWCAS/Suits_43 Regular",
          "count": 6,
          "extendedData": {
            "image1": "Suits_43 Regular",
            "sequence": "2401.0",
            "uniqueId": "1041265"
          }
        },
        {
          "label": "Suits_43 Long",
          "value": "facets.12515.value.raw%3A%22Suits_43+Long%22",
          "image": "/wcsstore/TMWCAS/Suits_43 Long",
          "count": 6,
          "extendedData": {
            "image1": "Suits_43 Long",
            "sequence": "2402.0",
            "uniqueId": "1042996"
          }
        },
        {
          "label": "Suits_44 Short",
          "value": "facets.12515.value.raw%3A%22Suits_44+Short%22",
          "image": "/wcsstore/TMWCAS/Suits_44 Short",
          "count": 74,
          "extendedData": {
            "image1": "Suits_44 Short",
            "sequence": "2500.0",
            "uniqueId": "1042391"
          }
        },
        {
          "label": "Suits_44 Regular",
          "value": "facets.12515.value.raw%3A%22Suits_44+Regular%22",
          "image": "/wcsstore/TMWCAS/Suits_44 Regular",
          "count": 90,
          "extendedData": {
            "image1": "Suits_44 Regular",
            "sequence": "2501.0",
            "uniqueId": "1040352"
          }
        },
        {
          "label": "Suits_44 Long",
          "value": "facets.12515.value.raw%3A%22Suits_44+Long%22",
          "image": "/wcsstore/TMWCAS/Suits_44 Long",
          "count": 87,
          "extendedData": {
            "image1": "Suits_44 Long",
            "sequence": "2502.0",
            "uniqueId": "1041347"
          }
        },
        {
          "label": "Suits_44 Extra Long",
          "value": "facets.12515.value.raw%3A%22Suits_44+Extra+Long%22",
          "image": "/wcsstore/TMWCAS/Suits_44 Extra Long",
          "count": 26,
          "extendedData": {
            "image1": "Suits_44 Extra Long",
            "sequence": "2503.0",
            "uniqueId": "1043557"
          }
        },
        {
          "label": "Suits_45 Regular",
          "value": "facets.12515.value.raw%3A%22Suits_45+Regular%22",
          "image": "/wcsstore/TMWCAS/Suits_45 Regular",
          "count": 1,
          "extendedData": {
            "image1": "Suits_45 Regular",
            "sequence": "2601.0",
            "uniqueId": "1043118"
          }
        },
        {
          "label": "Suits_46 Short",
          "value": "facets.12515.value.raw%3A%22Suits_46+Short%22",
          "image": "/wcsstore/TMWCAS/Suits_46 Short",
          "count": 53,
          "extendedData": {
            "image1": "Suits_46 Short",
            "sequence": "2700.0",
            "uniqueId": "1043328"
          }
        },
        {
          "label": "Suits_46 Regular",
          "value": "facets.12515.value.raw%3A%22Suits_46+Regular%22",
          "image": "/wcsstore/TMWCAS/Suits_46 Regular",
          "count": 94,
          "extendedData": {
            "image1": "Suits_46 Regular",
            "sequence": "2701.0",
            "uniqueId": "1039741"
          }
        },
        {
          "label": "Suits_46 Long",
          "value": "facets.12515.value.raw%3A%22Suits_46+Long%22",
          "image": "/wcsstore/TMWCAS/Suits_46 Long",
          "count": 87,
          "extendedData": {
            "image1": "Suits_46 Long",
            "sequence": "2702.0",
            "uniqueId": "1040413"
          }
        },
        {
          "label": "Suits_46 Extra Long",
          "value": "facets.12515.value.raw%3A%22Suits_46+Extra+Long%22",
          "image": "/wcsstore/TMWCAS/Suits_46 Extra Long",
          "count": 25,
          "extendedData": {
            "image1": "Suits_46 Extra Long",
            "sequence": "2703.0",
            "uniqueId": "1039805"
          }
        },
        {
          "label": "Suits_48 Short",
          "value": "facets.12515.value.raw%3A%22Suits_48+Short%22",
          "image": "/wcsstore/TMWCAS/Suits_48 Short",
          "count": 29,
          "extendedData": {
            "image1": "Suits_48 Short",
            "sequence": "2900.0",
            "uniqueId": "1040910"
          }
        },
        {
          "label": "Suits_48 Regular",
          "value": "facets.12515.value.raw%3A%22Suits_48+Regular%22",
          "image": "/wcsstore/TMWCAS/Suits_48 Regular",
          "count": 64,
          "extendedData": {
            "image1": "Suits_48 Regular",
            "sequence": "2901.0",
            "uniqueId": "1039151"
          }
        },
        {
          "label": "Suits_48 Long",
          "value": "facets.12515.value.raw%3A%22Suits_48+Long%22",
          "image": "/wcsstore/TMWCAS/Suits_48 Long",
          "count": 59,
          "extendedData": {
            "image1": "Suits_48 Long",
            "sequence": "2902.0",
            "uniqueId": "1042037"
          }
        },
        {
          "label": "Suits_48 Extra Long",
          "value": "facets.12515.value.raw%3A%22Suits_48+Extra+Long%22",
          "image": "/wcsstore/TMWCAS/Suits_48 Extra Long",
          "count": 12,
          "extendedData": {
            "image1": "Suits_48 Extra Long",
            "sequence": "2903.0",
            "uniqueId": "1043227"
          }
        },
        {
          "label": "Suits_50 Short",
          "value": "facets.12515.value.raw%3A%22Suits_50+Short%22",
          "image": "/wcsstore/TMWCAS/Suits_50 Short",
          "count": 14,
          "extendedData": {
            "image1": "Suits_50 Short",
            "sequence": "3000.0",
            "uniqueId": "1039194"
          }
        },
        {
          "label": "Suits_50 Regular",
          "value": "facets.12515.value.raw%3A%22Suits_50+Regular%22",
          "image": "/wcsstore/TMWCAS/Suits_50 Regular",
          "count": 61,
          "extendedData": {
            "image1": "Suits_50 Regular",
            "sequence": "3001.0",
            "uniqueId": "1042589"
          }
        },
        {
          "label": "Suits_50 Long",
          "value": "facets.12515.value.raw%3A%22Suits_50+Long%22",
          "image": "/wcsstore/TMWCAS/Suits_50 Long",
          "count": 51,
          "extendedData": {
            "image1": "Suits_50 Long",
            "sequence": "3002.0",
            "uniqueId": "1040299"
          }
        },
        {
          "label": "Suits_50 Extra Long",
          "value": "facets.12515.value.raw%3A%22Suits_50+Extra+Long%22",
          "image": "/wcsstore/TMWCAS/Suits_50 Extra Long",
          "count": 9,
          "extendedData": {
            "image1": "Suits_50 Extra Long",
            "sequence": "3003.0",
            "uniqueId": "1039565"
          }
        },
        {
          "label": "Suits_52 Regular",
          "value": "facets.12515.value.raw%3A%22Suits_52+Regular%22",
          "image": "/wcsstore/TMWCAS/Suits_52 Regular",
          "count": 46,
          "extendedData": {
            "image1": "Suits_52 Regular",
            "sequence": "3101.0",
            "uniqueId": "1041873"
          }
        },
        {
          "label": "Suits_52 Long",
          "value": "facets.12515.value.raw%3A%22Suits_52+Long%22",
          "image": "/wcsstore/TMWCAS/Suits_52 Long",
          "count": 38,
          "extendedData": {
            "image1": "Suits_52 Long",
            "sequence": "3102.0",
            "uniqueId": "1041692"
          }
        },
        {
          "label": "Suits_52 Extra Long",
          "value": "facets.12515.value.raw%3A%22Suits_52+Extra+Long%22",
          "image": "/wcsstore/TMWCAS/Suits_52 Extra Long",
          "count": 8,
          "extendedData": {
            "image1": "Suits_52 Extra Long",
            "sequence": "3103.0",
            "uniqueId": "1042318"
          }
        },
        {
          "label": "Suits_54 Regular",
          "value": "facets.12515.value.raw%3A%22Suits_54+Regular%22",
          "image": "/wcsstore/TMWCAS/Suits_54 Regular",
          "count": 43,
          "extendedData": {
            "image1": "Suits_54 Regular",
            "sequence": "3201.0",
            "uniqueId": "1039673"
          }
        },
        {
          "label": "Suits_54 Long",
          "value": "facets.12515.value.raw%3A%22Suits_54+Long%22",
          "image": "/wcsstore/TMWCAS/Suits_54 Long",
          "count": 31,
          "extendedData": {
            "image1": "Suits_54 Long",
            "sequence": "3202.0",
            "uniqueId": "1042075"
          }
        },
        {
          "label": "Suits_54 Extra Long",
          "value": "facets.12515.value.raw%3A%22Suits_54+Extra+Long%22",
          "image": "/wcsstore/TMWCAS/Suits_54 Extra Long",
          "count": 5,
          "extendedData": {
            "image1": "Suits_54 Extra Long",
            "sequence": "3203.0",
            "uniqueId": "1041204"
          }
        },
        {
          "label": "Suits_56 Regular",
          "value": "facets.12515.value.raw%3A%22Suits_56+Regular%22",
          "image": "/wcsstore/TMWCAS/Suits_56 Regular",
          "count": 36,
          "extendedData": {
            "image1": "Suits_56 Regular",
            "sequence": "3221.0",
            "uniqueId": "1041570"
          }
        },
        {
          "label": "Suits_56 Long",
          "value": "facets.12515.value.raw%3A%22Suits_56+Long%22",
          "image": "/wcsstore/TMWCAS/Suits_56 Long",
          "count": 34,
          "extendedData": {
            "image1": "Suits_56 Long",
            "sequence": "3222.0",
            "uniqueId": "1043818"
          }
        },
        {
          "label": "Suits_58 Regular",
          "value": "facets.12515.value.raw%3A%22Suits_58+Regular%22",
          "image": "/wcsstore/TMWCAS/Suits_58 Regular",
          "count": 35,
          "extendedData": {
            "image1": "Suits_58 Regular",
            "sequence": "3241.0",
            "uniqueId": "1043074"
          }
        },
        {
          "label": "Suits_58 Long",
          "value": "facets.12515.value.raw%3A%22Suits_58+Long%22",
          "image": "/wcsstore/TMWCAS/Suits_58 Long",
          "count": 25,
          "extendedData": {
            "image1": "Suits_58 Long",
            "sequence": "3242.0",
            "uniqueId": "1044528"
          }
        },
        {
          "label": "Suits_60 Regular",
          "value": "facets.12515.value.raw%3A%22Suits_60+Regular%22",
          "image": "/wcsstore/TMWCAS/Suits_60 Regular",
          "count": 24,
          "extendedData": {
            "image1": "Suits_60 Regular",
            "sequence": "3261.0",
            "uniqueId": "1044520"
          }
        },
        {
          "label": "Suits_60 Long",
          "value": "facets.12515.value.raw%3A%22Suits_60+Long%22",
          "image": "/wcsstore/TMWCAS/Suits_60 Long",
          "count": 18,
          "extendedData": {
            "image1": "Suits_60 Long",
            "sequence": "3262.0",
            "uniqueId": "1040458"
          }
        },
        {
          "label": "Pants_37W x 30L",
          "value": "facets.12515.value.raw%3A%22Pants_37W+x+30L%22",
          "image": "/wcsstore/TMWCAS/Pants_37W x 30L",
          "count": 1,
          "extendedData": {
            "image1": "Pants_37W x 30L",
            "sequence": "7100.0",
            "uniqueId": "1039939"
          }
        },
        {
          "label": "Pants_39W x 32L",
          "value": "facets.12515.value.raw%3A%22Pants_39W+x+32L%22",
          "image": "/wcsstore/TMWCAS/Pants_39W x 32L",
          "count": 2,
          "extendedData": {
            "image1": "Pants_39W x 32L",
            "sequence": "13120.0",
            "uniqueId": "1754002"
          }
        },
        {
          "label": "Pants_39W x 34L",
          "value": "facets.12515.value.raw%3A%22Pants_39W+x+34L%22",
          "image": "/wcsstore/TMWCAS/Pants_39W x 34L",
          "count": 1,
          "extendedData": {
            "image1": "Pants_39W x 34L",
            "sequence": "17860.0",
            "uniqueId": "1450004"
          }
        }
      ],
      "extendedData": {
        "name": "Size",
        "fdesc": "Size",
        "fname": "Size",
        "sortorder": "0",
        "propertyId": "12515",
        "displayable": "true",
        "max_display": "-1",
        "zero_display": "false",
        "propertyvalue": "Size",
        "displaySequence": "3.0",
        "allValuesReturned": "true",
        "maximumValuesToDisplay": "-1",
        "allowMultipleValueSelection": "true"
      },
      "ShowDefaultFilter": true
    },
    {
      "name": "Type",
      "value": "facets.12564.value.raw",
      "entry": [
        {
          "label": "2 Piece Suits",
          "value": "facets.12564.value.raw%3A%222+Piece+Suits%22",
          "image": "/wcsstore/TMWCAS/30_2 PIECE SUITS",
          "count": 118,
          "extendedData": {
            "image1": "30_2 PIECE SUITS",
            "sequence": "1.0",
            "uniqueId": "3350180"
          }
        }
      ],
      "extendedData": {
        "name": "Type",
        "fdesc": "Type",
        "fname": "Type",
        "sortorder": "0",
        "propertyId": "12564",
        "displayable": "true",
        "max_display": "-1",
        "zero_display": "false",
        "propertyvalue": "Type",
        "displaySequence": "5.0",
        "allValuesReturned": "true",
        "maximumValuesToDisplay": "-1",
        "allowMultipleValueSelection": "true"
      },
      "ShowDefaultFilter": true
    },
    {
      "name": "Pattern",
      "value": "facets.12537.value.raw",
      "entry": [
        {
          "label": "GRID",
          "value": "facets.12537.value.raw%3A%22GRID%22",
          "image": "/wcsstore/TMWCAS/PATTERN_GRID",
          "count": 1,
          "extendedData": {
            "image1": "PATTERN_GRID",
            "sequence": "1.0",
            "uniqueId": "3995218"
          }
        },
        {
          "label": "CORDUROY",
          "value": "facets.12537.value.raw%3A%22CORDUROY%22",
          "image": "/wcsstore/TMWCAS/PATTERN_CORDUROY",
          "count": 1,
          "extendedData": {
            "image1": "PATTERN_CORDUROY",
            "sequence": "1.0",
            "uniqueId": "3995103"
          }
        },
        {
          "label": "CHECK",
          "value": "facets.12537.value.raw%3A%22CHECK%22",
          "image": "/wcsstore/TMWCAS/PATTERN_CHECK",
          "count": 3,
          "extendedData": {
            "image1": "PATTERN_CHECK",
            "sequence": "1.0",
            "uniqueId": "1042712"
          }
        },
        {
          "label": "PLAID",
          "value": "facets.12537.value.raw%3A%22PLAID%22",
          "image": "/wcsstore/TMWCAS/PATTERN_PLAID",
          "count": 21,
          "extendedData": {
            "image1": "PATTERN_PLAID",
            "sequence": "1.0",
            "uniqueId": "1041978"
          }
        },
        {
          "label": "BIRDSEYE",
          "value": "facets.12537.value.raw%3A%22BIRDSEYE%22",
          "image": "/wcsstore/TMWCAS/PATTERN_BIRDSEYE",
          "count": 1,
          "extendedData": {
            "image1": "PATTERN_BIRDSEYE",
            "sequence": "1.0",
            "uniqueId": "5768312"
          }
        },
        {
          "label": "NA",
          "value": "facets.12537.value.raw%3A%22NA%22",
          "image": "/wcsstore/TMWCAS/PATTERN_NA",
          "count": 1,
          "extendedData": {
            "image1": "PATTERN_NA",
            "sequence": "1.0",
            "uniqueId": "5874527"
          }
        },
        {
          "label": "SHARKSKIN",
          "value": "facets.12537.value.raw%3A%22SHARKSKIN%22",
          "image": "/wcsstore/TMWCAS/PATTERN_SHARKSKIN",
          "count": 3,
          "extendedData": {
            "image1": "PATTERN_SHARKSKIN",
            "sequence": "1.0",
            "uniqueId": "5248146"
          }
        },
        {
          "label": "STRIPE",
          "value": "facets.12537.value.raw%3A%22STRIPE%22",
          "image": "/wcsstore/TMWCAS/PATTERN_STRIPE",
          "count": 3,
          "extendedData": {
            "image1": "PATTERN_STRIPE",
            "sequence": "1.0",
            "uniqueId": "1043464"
          }
        },
        {
          "label": "SOLID",
          "value": "facets.12537.value.raw%3A%22SOLID%22",
          "image": "/wcsstore/TMWCAS/PATTERN_SOLID",
          "count": 62,
          "extendedData": {
            "image1": "PATTERN_SOLID",
            "sequence": "1.0",
            "uniqueId": "1042527"
          }
        },
        {
          "label": "HERRINGBONE",
          "value": "facets.12537.value.raw%3A%22HERRINGBONE%22",
          "image": "/wcsstore/TMWCAS/PATTERN_HERRINGBONE",
          "count": 2,
          "extendedData": {
            "image1": "PATTERN_HERRINGBONE",
            "sequence": "1.0",
            "uniqueId": "1039670"
          }
        },
        {
          "label": "TIC",
          "value": "facets.12537.value.raw%3A%22TIC%22",
          "image": "/wcsstore/TMWCAS/PATTERN_TIC",
          "count": 6,
          "extendedData": {
            "image1": "PATTERN_TIC",
            "sequence": "1.0",
            "uniqueId": "1042458"
          }
        },
        {
          "label": "WINDOWPANE",
          "value": "facets.12537.value.raw%3A%22WINDOWPANE%22",
          "image": "/wcsstore/TMWCAS/PATTERN_WINDOWPANE",
          "count": 11,
          "extendedData": {
            "image1": "PATTERN_WINDOWPANE",
            "sequence": "1.0",
            "uniqueId": "1043375"
          }
        },
        {
          "label": "NEAT",
          "value": "facets.12537.value.raw%3A%22NEAT%22",
          "image": "/wcsstore/TMWCAS/PATTERN_NEAT",
          "count": 1,
          "extendedData": {
            "image1": "PATTERN_NEAT",
            "sequence": "1.0",
            "uniqueId": "1411518"
          }
        }
      ],
      "extendedData": {
        "name": "Pattern",
        "fdesc": "Pattern",
        "fname": "Pattern",
        "sortorder": "0",
        "propertyId": "12537",
        "displayable": "true",
        "max_display": "-1",
        "zero_display": "false",
        "propertyvalue": "Pattern",
        "displaySequence": "35.0",
        "allValuesReturned": "true",
        "maximumValuesToDisplay": "-1",
        "allowMultipleValueSelection": "true"
      }
    },
    {
      "name": "MFName",
      "value": "manufacturer.raw",
      "entry": [
        {
          "label": "Awearness Kenneth Cole",
          "value": "manufacturer.raw%3A%22Awearness+Kenneth+Cole%22",
          "count": 15,
          "extendedData": {}
        },
        {
          "label": "Haggar",
          "value": "manufacturer.raw%3A%22Haggar%22",
          "count": 13,
          "extendedData": {}
        },
        {
          "label": "Tommy Hilfiger",
          "value": "manufacturer.raw%3A%22Tommy+Hilfiger%22",
          "count": 6,
          "extendedData": {}
        },
        {
          "label": "Joseph Abboud",
          "value": "manufacturer.raw%3A%22Joseph+Abboud%22",
          "count": 12,
          "extendedData": {}
        },
        {
          "label": "JOE Joseph Abboud",
          "value": "manufacturer.raw%3A%22JOE+Joseph+Abboud%22",
          "count": 9,
          "extendedData": {}
        },
        {
          "label": "Pronto Uomo Platinum",
          "value": "manufacturer.raw%3A%22Pronto+Uomo+Platinum%22",
          "count": 4,
          "extendedData": {}
        },
        {
          "label": "Michael Strahan",
          "value": "manufacturer.raw%3A%22Michael+Strahan%22",
          "count": 1,
          "extendedData": {}
        },
        {
          "label": "Egara",
          "value": "manufacturer.raw%3A%22Egara%22",
          "count": 10,
          "extendedData": {}
        },
        {
          "label": "Wilke-Rodriguez",
          "value": "manufacturer.raw%3A%22Wilke-Rodriguez%22",
          "count": 10,
          "extendedData": {}
        },
        {
          "label": "Calvin Klein",
          "value": "manufacturer.raw%3A%22Calvin+Klein%22",
          "count": 12,
          "extendedData": {}
        },
        {
          "label": "Pronto Uomo",
          "value": "manufacturer.raw%3A%22Pronto+Uomo%22",
          "count": 5,
          "extendedData": {}
        },
        {
          "label": "Nautica",
          "value": "manufacturer.raw%3A%22Nautica%22",
          "count": 9,
          "extendedData": {}
        },
        {
          "label": "Paisley & Gray",
          "value": "manufacturer.raw%3A%22Paisley+%26Amp%3B+Gray%22",
          "count": 12,
          "extendedData": {}
        }
      ],
      "extendedData": {
        "name": "MFName",
        "fdesc": "The manufacturer name",
        "fname": "MFName",
        "sortorder": "0",
        "propertyId": "manufacturer.raw",
        "displayable": "true",
        "max_display": "200",
        "zero_display": "false",
        "propertyvalue": "manufacturer.raw",
        "displaySequence": "6.0",
        "allValuesReturned": "true",
        "maximumValuesToDisplay": "200",
        "allowMultipleValueSelection": "true"
      },
      "ShowDefaultFilter": true
    },
    {
      "name": "Jacket Style",
      "value": "facets.12552.value.raw",
      "entry": [
        {
          "label": "Double Breasted",
          "value": "facets.12552.value.raw%3A%22Double+Breasted%22",
          "image": "",
          "count": 1,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1039267"
          }
        },
        {
          "label": "2-Button",
          "value": "facets.12552.value.raw%3A%222-Button%22",
          "image": "",
          "count": 116,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1044502"
          }
        }
      ],
      "extendedData": {
        "name": "Jacket Style",
        "fdesc": "Jacket Style",
        "fname": "Jacket Style",
        "sortorder": "0",
        "propertyId": "12552",
        "displayable": "true",
        "max_display": "-1",
        "zero_display": "false",
        "propertyvalue": "JacketStyle",
        "displaySequence": "19.0",
        "allValuesReturned": "true",
        "maximumValuesToDisplay": "-1",
        "allowMultipleValueSelection": "true"
      }
    },
    {
      "name": "Jacket Lining",
      "value": "facets.12540.value.raw",
      "entry": [
        {
          "label": "Half Lined",
          "value": "facets.12540.value.raw%3A%22Half+Lined%22",
          "image": "",
          "count": 7,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1040855"
          }
        },
        {
          "label": "Full Lined",
          "value": "facets.12540.value.raw%3A%22Full+Lined%22",
          "image": "",
          "count": 98,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1043675"
          }
        },
        {
          "label": "Un-Lined",
          "value": "facets.12540.value.raw%3A%22Un-Lined%22",
          "image": "",
          "count": 1,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1039199"
          }
        }
      ],
      "extendedData": {
        "name": "Jacket Lining",
        "fdesc": "Jacket Lining",
        "fname": "Jacket Lining",
        "sortorder": "0",
        "propertyId": "12540",
        "displayable": "true",
        "max_display": "-1",
        "zero_display": "false",
        "propertyvalue": "JacketLining",
        "displaySequence": "18.0",
        "allValuesReturned": "true",
        "maximumValuesToDisplay": "-1",
        "allowMultipleValueSelection": "true"
      }
    },
    {
      "name": "Lapel Style",
      "value": "facets.12563.value.raw",
      "entry": [
        {
          "label": "Notch Lapel",
          "value": "facets.12563.value.raw%3A%22Notch+Lapel%22",
          "image": "",
          "count": 100,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1041414"
          }
        },
        {
          "label": "Peak Lapel",
          "value": "facets.12563.value.raw%3A%22Peak+Lapel%22",
          "image": "",
          "count": 17,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1040595"
          }
        }
      ],
      "extendedData": {
        "name": "Lapel Style",
        "fdesc": "Lapel Style",
        "fname": "Lapel Style",
        "sortorder": "0",
        "propertyId": "12563",
        "displayable": "true",
        "max_display": "-1",
        "zero_display": "false",
        "propertyvalue": "LapelStyle",
        "displaySequence": "21.0",
        "allValuesReturned": "true",
        "maximumValuesToDisplay": "-1",
        "allowMultipleValueSelection": "true"
      }
    },
    {
      "name": "Material",
      "value": "facets.12535.value.raw",
      "entry": [
        {
          "label": "Polyester",
          "value": "facets.12535.value.raw%3A%22Polyester%22",
          "image": "",
          "count": 2,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1043026"
          }
        },
        {
          "label": "Polyester Blend",
          "value": "facets.12535.value.raw%3A%22Polyester+Blend%22",
          "image": "",
          "count": 52,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1042193"
          }
        },
        {
          "label": "Linen",
          "value": "facets.12535.value.raw%3A%22Linen%22",
          "image": "",
          "count": 1,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1039379"
          }
        },
        {
          "label": "Linen Blend",
          "value": "facets.12535.value.raw%3A%22Linen+Blend%22",
          "image": "",
          "count": 4,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1042271"
          }
        },
        {
          "label": "Nylon Blend",
          "value": "facets.12535.value.raw%3A%22Nylon+Blend%22",
          "image": "",
          "count": 1,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1039684"
          }
        },
        {
          "label": "Cotton Blend",
          "value": "facets.12535.value.raw%3A%22Cotton+Blend%22",
          "image": "",
          "count": 3,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1039358"
          }
        },
        {
          "label": "Wool Blend",
          "value": "facets.12535.value.raw%3A%22Wool+Blend%22",
          "image": "",
          "count": 54,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1043520"
          }
        }
      ],
      "extendedData": {
        "name": "Material",
        "fdesc": "Material",
        "fname": "Material",
        "sortorder": "0",
        "propertyId": "12535",
        "displayable": "true",
        "max_display": "-1",
        "zero_display": "false",
        "propertyvalue": "Material",
        "displaySequence": "9.0",
        "allValuesReturned": "true",
        "maximumValuesToDisplay": "-1",
        "allowMultipleValueSelection": "true"
      }
    },
    {
      "name": "Rating",
      "value": "facets.13001.value.raw",
      "entry": [
        {
          "label": "4.0",
          "value": "facets.13001.value.raw%3A%224.0%22",
          "image": "",
          "count": 10,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1146713"
          }
        },
        {
          "label": "5.0",
          "value": "facets.13001.value.raw%3A%225.0%22",
          "image": "",
          "count": 69,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1146719"
          }
        },
        {
          "label": "2.0",
          "value": "facets.13001.value.raw%3A%222.0%22",
          "image": "",
          "count": 1,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1146650"
          }
        },
        {
          "label": "1.0",
          "value": "facets.13001.value.raw%3A%221.0%22",
          "image": "",
          "count": 1,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1146694"
          }
        },
        {
          "label": "3.0",
          "value": "facets.13001.value.raw%3A%223.0%22",
          "image": "",
          "count": 3,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1146201"
          }
        }
      ],
      "extendedData": {
        "name": "Rating",
        "fdesc": "Rating",
        "fname": "Rating",
        "sortorder": "0",
        "propertyId": "13001",
        "displayable": "true",
        "max_display": "-1",
        "zero_display": "false",
        "propertyvalue": "AverageRoundedRating",
        "displaySequence": "8.0",
        "allValuesReturned": "true",
        "maximumValuesToDisplay": "-1",
        "allowMultipleValueSelection": "true"
      }
    },
    {
      "name": "Occasion",
      "value": "facets.12551.value.raw",
      "entry": [
        {
          "label": "Formal",
          "value": "facets.12551.value.raw%3A%22Formal%22",
          "image": "",
          "count": 4,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1042416"
          }
        },
        {
          "label": "Casual",
          "value": "facets.12551.value.raw%3A%22Casual%22",
          "image": "",
          "count": 28,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1042873"
          }
        },
        {
          "label": "Vacation",
          "value": "facets.12551.value.raw%3A%22Vacation%22",
          "image": "",
          "count": 11,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1040813"
          }
        },
        {
          "label": "Funeral",
          "value": "facets.12551.value.raw%3A%22Funeral%22",
          "image": "",
          "count": 16,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "2813504"
          }
        },
        {
          "label": "Work",
          "value": "facets.12551.value.raw%3A%22Work%22",
          "image": "",
          "count": 68,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1043477"
          }
        },
        {
          "label": "Wedding",
          "value": "facets.12551.value.raw%3A%22Wedding%22",
          "image": "",
          "count": 27,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1042506"
          }
        },
        {
          "label": "Prom",
          "value": "facets.12551.value.raw%3A%22Prom%22",
          "image": "",
          "count": 10,
          "extendedData": {
            "image1": null,
            "sequence": "1.0",
            "uniqueId": "1043656"
          }
        }
      ],
      "extendedData": {
        "name": "Occasion",
        "fdesc": "Occasion",
        "fname": "Occasion",
        "sortorder": "0",
        "propertyId": "12551",
        "displayable": "true",
        "max_display": "-1",
        "zero_display": "false",
        "propertyvalue": "Occasion",
        "displaySequence": "10.0",
        "allValuesReturned": "true",
        "maximumValuesToDisplay": "-1",
        "allowMultipleValueSelection": "true"
      },
      "ShowDefaultFilter": true
    }
  ]
const FacetOptions: React.FC<FacetOptionsProps> = ({
    facets = facetOptionsMock,
    selectedValue = null,
    onToggle = () => {},
    id,
}) => {
    return (
      <div id={id} className="mx-[2.25rem] md:mx-[5.25rem] my-8">
          <div className='space-y-4'>
              <div className='flex flex-wrap items-center gap-3'>
                  {facets.map(entry => {
                      const isSelected = selectedValue === entry.value
                      return (
                          <button
                              key={entry.value}
                              type="button"
                              onClick={() => onToggle(entry.value)}
                              className={`
                                  relative inline-flex items-center justify-center
                                  h-12 px-4
                                  rounded-none
                                  border border-gray-300
                                  bg-gray-200
                                  text-gray-900
                                  transition-colors duration-150
                                  hover:bg-gray-300
                                  focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2
                                  ${isSelected ? 'bg-gray-400 border-gray-500' : ''}
                              `}>
                            <span className='text-sm md:text-base font-medium'>
                              {entry.name}
                            </span>
                          </button>
                      )
                  })}
              </div>
          </div>
          </div>
      )
    
}

export {FacetOptions}

