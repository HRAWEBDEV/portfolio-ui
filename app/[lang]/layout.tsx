import '../globals.css';
import 'swiper/css';
import {
 type SupportedLocales,
 localesInfo,
 locales,
} from '@/internationlization/locales';
import { Roboto } from 'next/font/google';
import AppConfigProvider from '@/services/app-config/AppConfigProvider';
import LocalFont from 'next/font/local';

export async function generateStaticParams() {
 return locales.map((locale) => ({
  lang: locale,
 }));
}

const faSans = LocalFont({
 display: 'swap',
 variable: '--font-fa-sans',
 src: [
  {
   path: '../../public/fonts/fa/sans/IRANSansWebFaNum-UltraLight.woff2',
   weight: '100',
   style: 'normal',
  },
  {
   path: '../../public/fonts/fa/sans/IRANSansWebFaNum-UltraLight.woff',
   weight: '100',
   style: 'normal',
  },
  {
   path: '../../public/fonts/fa/sans/IRANSansWebFaNum-Light.woff2',
   weight: '300',
   style: 'normal',
  },
  {
   path: '../../public/fonts/fa/sans/IRANSansWebFaNum-Light.woff',
   weight: '300',
   style: 'normal',
  },
  {
   path: '../../public/fonts/fa/sans/IRANSansWebFaNum.woff2',
   weight: '400',
   style: 'normal',
  },
  {
   path: '../../public/fonts/fa/sans/IRANSansWebFaNum.woff',
   weight: '400',
   style: 'normal',
  },
  {
   path: '../../public/fonts/fa/sans/IRANSansWebFaNum-Medium.woff2',
   weight: '500',
   style: 'normal',
  },
  {
   path: '../../public/fonts/fa/sans/IRANSansWebFaNum-Medium.woff',
   weight: '500',
   style: 'normal',
  },
  {
   path: '../../public/fonts/fa/sans/IRANSansWebFaNum-Bold.woff2',
   weight: '700',
   style: 'normal',
  },
  {
   path: '../../public/fonts/fa/sans/IRANSansWebFaNum-Bold.woff',
   weight: '700',
   style: 'normal',
  },
  {
   path: '../../public/fonts/fa/sans/IRANSansWebFaNum-Black.woff2',
   weight: '900',
   style: 'normal',
  },
  {
   path: '../../public/fonts/fa/sans/IRANSansWebFaNum-Black.woff',
   weight: '900',
   style: 'normal',
  },
 ],
});

const robotoFont = Roboto({
 variable: '--roboto-font',
 display: 'swap',
 subsets: ['latin'],
});

export default async function RootLayout({
 children,
 params,
}: Readonly<{
 children: React.ReactNode;
 params: Promise<{ lang: SupportedLocales }>;
}>) {
 const { lang } = await params;
 const localeInfo = localesInfo[lang];
 return (
  <html lang={lang} dir={localeInfo.contentDirection}>
   <body
    data-theme={'system-preferred'}
    dir={localeInfo.contentDirection}
    className={`${faSans.variable} ${robotoFont.variable}`}
   >
    <AppConfigProvider lang={lang}>{children}</AppConfigProvider>
   </body>
  </html>
 );
}
