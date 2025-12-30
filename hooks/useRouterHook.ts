'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { defaultLocale } from '@/lib/contentstack/localization'

const useRouterHook = () => {
    const Router = useRouter()
    const Pathname = usePathname()
    const SearchParams = useSearchParams()

    const getLocale = () => {
        // Returns locale from process.env.DEFAULT_LOCALE
        return defaultLocale
    }

    const getUnlocalizedPath = () => {
        // Since locale is no longer in the URL, pathname is already unlocalized
        return Pathname || '/'
    }

    const getLocalizedPath = () => {
        return Pathname
    }

    const getStringfiedSearchParams = () => {
        return SearchParams?.toString()?.length ? `?${SearchParams.toString()}` : ''
    }

    return {
        path: getUnlocalizedPath(),
        locale: getLocale(),
        localizedPath: getLocalizedPath(),
        searchParams: SearchParams,
        stringfiedSearchParams: getStringfiedSearchParams(),
        ...Router

    }
}

export default useRouterHook