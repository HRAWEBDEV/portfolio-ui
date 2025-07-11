'use client';
import {
 type PropsWithChildren,
 useState,
 useMemo,
 useCallback,
 useEffect,
} from 'react';
import { localesInfo } from '@/internationlization/locales';
import { type Store, appConfigContext } from './appConfigContext';
import { getThemeStorage, setThemeStorage } from './themeStorage';
import { setLangCookie } from './langCookie';

function changeBodyTheme(theme: Store['appTheme']) {
 if (theme === 'system') {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
   document.body.setAttribute('data-theme', 'dark');
  } else {
   document.body.setAttribute('data-theme', 'light');
  }
 } else {
  document.body.setAttribute('data-theme', theme);
 }
}

export default function AppConfigProvider({
 children,
 lang,
}: PropsWithChildren & {
 lang: Store['activeLang'];
}) {
 const [appTheme, setAppTheme] = useState<Store['appTheme']>('system');
 const [activeLang, setActiveLang] = useState<Store['activeLang']>(lang);

 const activeLangInfo = useMemo(() => localesInfo[activeLang], [activeLang]);

 const changeActiveLang = useCallback((newLang: Store['activeLang']) => {
  setLangCookie(newLang);
  setActiveLang(newLang);
  const splitPath = location.pathname.split('/');
  splitPath[1] = newLang;
  location.href = `${splitPath.join('/')}${location.search}`;
 }, []);
 const changeAppTheme = useCallback((newTheme: Store['appTheme']) => {
  setAppTheme(newTheme);
  setThemeStorage(newTheme);
  changeBodyTheme(newTheme);
 }, []);

 const ctx = useMemo(
  () =>
   ({
    activeLang,
    appTheme,
    activeLangInfo,
    changeActiveLang: changeActiveLang,
    changeAppTheme: changeAppTheme,
   } as Store),
  [activeLang, appTheme, changeActiveLang, changeAppTheme, activeLangInfo]
 );

 useEffect(() => {
  const storedTheme = getThemeStorage();
  if (storedTheme) {
   changeAppTheme(storedTheme);
  }
 }, [changeAppTheme]);

 useEffect(() => {
  if (appTheme !== 'system') return;
  const abortController = new AbortController();
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener(
   'change',
   () => {
    changeBodyTheme('system');
   },
   { signal: abortController.signal }
  );
  return () => {
   if (abortController) {
    abortController.abort();
   }
  };
 }, [appTheme]);

 return (
  <appConfigContext.Provider value={ctx}>{children}</appConfigContext.Provider>
 );
}
