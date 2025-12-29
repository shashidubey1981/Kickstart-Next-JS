import type { Metadata } from "next"; // Importing the Metadata type from Next.js
import "./globals.css"; // Importing global CSS styles
import { defaultLocale } from '@/lib/contentstack'
import { getEntries, getPersonalizationConfigFromCMS } from "@/lib/contentstack";

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
  const personalizeConfig = await getPersonalizationConfigFromCMS();
  console.log('personalizeConfig>>>', personalizeConfig);
  return (
    <html lang="en">
      {/* Setting the language attribute for the HTML document */}
      <body>
        <main className="max-w-(--breakpoint-md) mx-auto">{children}</main>
      </body>
      {/* Rendering the children components inside the body */}
    </html>
  );
}
