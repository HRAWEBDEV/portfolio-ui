const localesInfo = [
 {
  locale: 'fa',
 },
 {
  locale: 'en',
 },
] as const;
const locales = localesInfo.map((item) => item.locale);

type SupportedLocales = (typeof locales)[number];

export { type SupportedLocales, localesInfo, locales };
