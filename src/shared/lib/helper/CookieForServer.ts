import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { cookies } from 'next/headers';

export function cookieValueToObj(value: string) {
  return value.split('&').reduce<Record<string, string>>((acc, cur) => {
    const [k, v] = cur.split('=');
    acc[k] = v;
    return acc;
  }, {});
}

export function makeCookieValue(obj: Record<string, string>) {
  return Object.entries(obj)
    .map(([k, v]) => `${k}=${v}`)
    .join('&');
}

export function getCookieValue(key: string) {
  const cookieStore = cookies();
  const value = cookieStore.get(key)?.value;

  if (!value) return null;
  return value;
}

export function makeCookie(cookieStore: ReadonlyRequestCookies, keys: string[]) {
  return keys
    .reduce<string[]>((acc, key) => {
      const cookie = cookieStore.get(key);
      if (cookie) acc.push(`${cookie.name}=${encodeURIComponent(cookie.value)}`);
      return acc;
    }, [])
    .join('; ');
}

export function getMyMemberInfoCookie() {
  const cookieStore = cookies();

  const myMemberInfoCookie = cookieStore.get('MyMemberInfo') ?? '';
  if (myMemberInfoCookie) return makeCookie(cookieStore, ['MyMemberInfo', 'loginType']);
  return '';
}

export function getCookie(key: string) {
  const cookieStore = cookies();
  return cookieStore.get(key) ?? null;
}
