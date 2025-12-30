import type {Metadata} from "next"; // Importing the Metadata type from Next.js
import { Inter, Roboto_Condensed } from 'next/font/google'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './globals.css'
import {MainLayout} from "@/MainLayout/MainLayout";
import {PersonalizationConfigProvider} from "@/context";
import { defaultLocale } from "@/lib/contentstack/localization";
import { getPersonalizationConfigFromCMS } from "@/lib/contentstack/contentstack";

const inter = Inter({ subsets: ['latin'] })

const robotoCondensed = Roboto_Condensed({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700'],
    style: ['normal', 'italic']
})

export const metadata: Metadata = {
    title: 'Mens Wearhouse: Shop Mens Clothing, Suits & Tux Rentals',
    description: 'Provided by Mens Wearhouse'
}

// RootLayout component that wraps the entire application
export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode; // Type definition for children prop
}>) {
    const personalizeConfig = await getPersonalizationConfigFromCMS()
    
    return (
        <html lang={defaultLocale}>
            <head>
                {/* eslint-disable @next/next/google-font-preconnect */}
                <link
                    rel='preload'
                    href='https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcviYwYZ8UA3.woff2'
                    as='font'
                    type='font/woff2'
                    crossOrigin=''
                />
            </head>
            <body
                className={`${robotoCondensed.className} ${inter.className}`}
            >
                <PersonalizationConfigProvider personalizeConfig={personalizeConfig || undefined}>
                    <MainLayout>
                        {children}
                    </MainLayout>
                </PersonalizationConfigProvider>
            </body>
        </html>
    );
}
