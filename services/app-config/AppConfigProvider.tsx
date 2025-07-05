'use client';
import {
 type PropsWithChildren,
 useState,
 useMemo,
 useCallback,
 useEffect,
} from 'react';
import { type Store, appConfigContext } from './appConfigContext';
import { getThemeStorage, setThemeStorage } from './themeStorage';
import { setLangCookie } from './langCookie';

export default function AppConfigProvider({
 children,
 lang,
}: PropsWithChildren & {
 lang: Store['activeLang'];
}) {
 const [appTheme, setAppTheme] = useState<Store['appTheme']>('system');
 const [activeLang, setActiveLang] = useState<Store['activeLang']>(lang);

 const changeActiveLang = useCallback((newLang: Store['activeLang']) => {
  setLangCookie(newLang);
  setActiveLang(newLang);
 }, []);
 const changeAppTheme = useCallback((newTheme: Store['appTheme']) => {
  setAppTheme(newTheme);
  setThemeStorage(newTheme);
  document.body.setAttribute('data-theme', newTheme);
 }, []);

 const ctx = useMemo(
  () =>
   ({
    activeLang,
    appTheme,
    changeActiveLang: changeActiveLang,
    changeAppTheme: changeAppTheme,
   } as Store),
  [activeLang, appTheme, changeActiveLang, changeAppTheme]
 );

 useEffect(() => {
  const storedTheme = getThemeStorage();
  if (storedTheme) {
   changeAppTheme(storedTheme);
  }
 }, [changeAppTheme]);
 return (
  <appConfigContext.Provider value={ctx}>{children}</appConfigContext.Provider>
 );
}
