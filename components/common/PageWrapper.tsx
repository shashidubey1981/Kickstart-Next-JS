'use client'
import React from 'react'
import { SEO } from '@/components'
import { SeoProps } from '@/types/pages'

/**
 * A wrapper component that provides SEO functionality for pages
 * @component
 * @param {Object} props - Component props
 * @param {string} props.locale - Current locale/language code
 * @param {string} props.title - Page title
 * @param {string} props.summary - Page description/summary
 * @param {string} props.url - Page URL
 * @param {Object} props.seo - Additional SEO metadata
 * @param {React.ReactNode} props.children - Child components to render
 * @returns {JSX.Element} Wrapped page with SEO metadata
 */

const PageWrapper:React.FC<SeoProps & React.PropsWithChildren> = ({ locale, title, summary, url, seo, children}: SeoProps & React.PropsWithChildren) => {
    return <>
        <SEO
            url={url}
            locale={locale}
            title={title}
            seo={seo}
            summary={summary}
            locales={[]}
        />
        {children}
    </>
}

export { PageWrapper }