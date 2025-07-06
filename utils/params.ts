import { type SupportedLocales } from '@/internationlization/locales';

export type WithParams = {
 params: Promise<{
  lang: SupportedLocales;
 }>;
};
