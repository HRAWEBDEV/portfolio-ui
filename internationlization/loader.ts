import 'server-only';
import { type SupportedLocales } from './locales';

const dictionaries = {
 fa: () => import('./dictionary/fa.json').then((md) => md.default),
 en: () => import('./dictionary/fa.json').then((md) => md.default),
};

export async function loader(locale: SupportedLocales) {
 return dictionaries[locale]();
}
