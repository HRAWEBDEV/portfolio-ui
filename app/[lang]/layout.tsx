import '../globals.css';
import {
 type SupportedLocales,
 localesInfo,
 locales,
} from '@/internationlization/locales';
import { Metadata } from 'next';
import { loader } from '@/internationlization/loader';

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
   <body dir={localeInfo.contentDirection}>{children}</body>
  </html>
 );
}
