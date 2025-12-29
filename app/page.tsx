import { getEntries } from "@/lib/contentstack";
import { defaultLocale } from "@/lib/contentstack";
import { Page } from '@/types'

export default async function Home() {
  
  const variantAliases: string[] = []
  const contentType = 'home_page'
  const path = '/'
  const homePage = await getEntries(contentType, defaultLocale as string, variantAliases) as Page.LandingPage['entry'];
  console.log(homePage);
  return <div></div>;
}
