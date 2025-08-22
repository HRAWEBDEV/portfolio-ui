const localesInfo = {
 fa: {
  locale: 'fa',
  extension: 'IR',
  contentDirection: 'rtl',
  name: 'فارسی',
  shortName: 'فا',
 },
 en: {
  locale: 'en',
  extension: 'US',
  contentDirection: 'ltr',
  name: 'English',
  shortName: 'EN',
 },
} as const;
const locales = Object.keys(localesInfo) as SupportedLocales[];

type LocaleInfo = typeof localesInfo;
type SupportedLocales = keyof typeof localesInfo;

export { type SupportedLocales, type LocaleInfo, localesInfo, locales };
