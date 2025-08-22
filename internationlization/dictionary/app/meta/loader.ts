import {
 type DictionaryMap,
 Dictionary,
} from '@/internationlization/dictionary';

type DictionaryResult = typeof import('./fa.json');

const dictionaryMap: DictionaryMap<DictionaryResult> = new Map([
 ['fa', () => import('./fa.json').then((md) => md.default as DictionaryResult)],
 ['en', () => import('./en.json').then((md) => md.default as DictionaryResult)],
]);

const newDictionary = new Dictionary(dictionaryMap);

export { type DictionaryResult, newDictionary };
