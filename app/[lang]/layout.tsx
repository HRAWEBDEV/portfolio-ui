import '../globals.css';
import 'swiper/css';
import {
 type SupportedLocales,
 localesInfo,
 locales,
} from '@/internationlization/locales';
import { Metadata } from 'next';
import { loader } from '@/internationlization/loader';
import { Vazirmatn, Roboto } from 'next/font/google';
import AppConfigProvider from '@/services/app-config/AppConfigProvider';

export async function generateStaticParams() {
 return locales.map((locale) => ({
  lang: locale,
 }));
}

export async function generateMetadata({
 params,
}: Readonly<{
 params: Promise<{ lang: SupportedLocales }>;
}>): Promise<Metadata> {
 const { lang } = await params;
 const { meta } = await loader(lang);
 return {
  ...meta,
 };
}

const vazirFont = Vazirmatn({
 variable: '--vazir-font',
 display: 'swap',
 subsets: ['arabic'],
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
    className={`${vazirFont.variable} ${robotoFont.variable}`}
   >
    <AppConfigProvider lang={lang}>{children}</AppConfigProvider>
   </body>
  </html>
 );
}
