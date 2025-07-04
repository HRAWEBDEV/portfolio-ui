import '../globals.css';
import {
 type SupportedLocales,
 localesInfo,
 locales,
} from '@/internationlization/locales';

export async function generateStaticParams() {
 return locales.map((locale) => ({
  lang: locale,
 }));
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
