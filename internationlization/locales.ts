const localesInfo = {
 fa: {
  locale: 'fa',
  contentDirection: 'rtl',
 },
 en: {
  locale: 'en',
  contentDirection: 'ltr',
 },
} as const;
const locales = Object.keys(localesInfo) as SupportedLocales[];

type SupportedLocales = keyof typeof localesInfo;

export { type SupportedLocales, localesInfo, locales };
