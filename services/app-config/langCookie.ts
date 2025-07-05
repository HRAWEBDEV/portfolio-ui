import { setCookie, getCookie } from '@/utils/cookies';
import { SupportedLocales } from '@/internationlization/locales';

const cookieName = 'lang';

function setLangCookie(lang: SupportedLocales): void {
 setCookie(cookieName, lang, {
  expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
 });
}

function getLangCookie(): SupportedLocales | null {
 return getCookie(cookieName) as SupportedLocales | null;
}

export { getLangCookie, setLangCookie };
