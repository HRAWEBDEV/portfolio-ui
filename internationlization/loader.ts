import 'server-only';
import { type SupportedLocales } from './locales';

type Dictionary = Awaited<ReturnType<(typeof dictionaries)[SupportedLocales]>>;
type WithDictionary = {
 dic: Dictionary;
};

const dictionaries = {
 fa: () => import('./dictionary/fa.json').then((md) => md.default),
 en: () => import('./dictionary/en.json').then((md) => md.default),
};

async function loader(locale: SupportedLocales) {
 return dictionaries[locale]();
}

export { type Dictionary, type WithDictionary, loader };
