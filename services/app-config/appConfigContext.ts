import { createContext, use } from 'react';
import { OutOfContext } from '@/utils/OutOfContext';
import {
 type SupportedLocales,
 LocaleInfo,
} from '@/internationlization/locales';

type AppTheme = 'light' | 'dark' | 'system';

type Store = {
 appTheme: AppTheme;
 activeLang: SupportedLocales;
 activeLangInfo: LocaleInfo[keyof LocaleInfo];
 changeActiveLang: (locale: SupportedLocales) => void;
 changeAppTheme: (theme: AppTheme) => void;
};

const appConfigContext = createContext<Store | null>(null);

function useAppConfigContext() {
 const val = use(appConfigContext);
 if (!val) throw new OutOfContext();
 return val;
}

export { type Store, type AppTheme, appConfigContext, useAppConfigContext };
