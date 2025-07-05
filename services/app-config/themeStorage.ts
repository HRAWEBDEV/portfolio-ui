import { type AppTheme } from './appConfigContext';

const storageName = 'app-theme';

function setThemeStorage(theme: AppTheme) {
 localStorage.setItem(storageName, theme);
}

function getThemeStorage(): AppTheme {
 const theme = localStorage.getItem(storageName);
 return (theme as AppTheme) || 'system';
}

export { setThemeStorage, getThemeStorage };
