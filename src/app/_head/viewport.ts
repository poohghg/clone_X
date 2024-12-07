import type { Viewport } from 'next';
import { cookies } from 'next/headers';

export function getTheme() {
  const theme = cookies().get('theme')?.value;
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
