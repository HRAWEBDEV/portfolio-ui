const localesInfo = {
 fa: {
  locale: 'fa',
  contentDirection: 'rtl',
  name: 'فارسی',
  shortName: 'فا',
 },
 en: {
  locale: 'en',
  contentDirection: 'ltr',
  name: 'English',
  shortName: 'EN',
 },
} as const;
const locales = Object.keys(localesInfo) as SupportedLocales[];

type SupportedLocales = keyof typeof localesInfo;

export { type SupportedLocales, localesInfo, locales };
