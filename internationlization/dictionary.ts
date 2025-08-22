import { type SupportedLocales } from './locales';

type DictionaryMap<T> = Map<SupportedLocales, () => Promise<T>>;

class Dictionary<T> {
 private cache = new Map<SupportedLocales, () => Promise<T>>();
 constructor(private readonly dictionaryMap: DictionaryMap<T>) {}
 async load(lang: SupportedLocales): Promise<T> {
  if (this.cache.has(lang)) {
   return this.cache.get(lang)!();
  }
  try {
   const dictionary = this.dictionaryMap.get(lang)!();
   this.cache.set(lang, () => dictionary);
   return dictionary;
  } catch (err) {
   this.cache.delete(lang);
   throw err;
  }
 }
}

export { type DictionaryMap, Dictionary };
