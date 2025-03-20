import type { Viewport } from 'next';
import { cookies, type UnsafeUnwrappedCookies } from 'next/headers';

export function getTheme() {
  const theme = (cookies() as unknown as UnsafeUnwrappedCookies).get('theme')?.value;
  if (!theme) return undefined;
  return theme === 'dark' ? '#1c1c1c' : '#ffffff';
}

export default function genViewPort(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
    userScalable: false,
    themeColor: getTheme(),
    viewportFit: 'cover',
  };
}
