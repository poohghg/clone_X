import { IS_NODE } from '@/src/shared/constant/globalConstants';

export default class WebHelper {
  static isMobileDevice(): boolean {
    if (IS_NODE) return false;

    const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return this.isTouchDevice() && isMobileDevice;
  }

  static isIOS_Mobile(): boolean {
    if (IS_NODE) return false;
    return this.isTouchDevice() && /iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  static isIOS(): boolean {
    if (IS_NODE) return false;
    return /iPhone|iPad|iPod|Mac/i.test(navigator.userAgent);
  }

  static isMac(): boolean {
    if (IS_NODE) return false;
    return /Mac/i.test(navigator.userAgent);
  }

  static isMacSafari(): boolean {
    if (IS_NODE) return false;
    return this.isMac() && /Safari/i.test(navigator.userAgent);
  }

  static isAndroid(): boolean {
    if (IS_NODE) return false;
    return this.isTouchDevice() && /Android/i.test(navigator.userAgent);
  }

  static isTouchDevice(): boolean {
    if (IS_NODE) return false;
    const isTouchDevice =
      navigator.maxTouchPoints || 'ontouchstart' in document.documentElement;
    return !!isTouchDevice;
  }

  static isMatchMedia(): boolean {
    if (IS_NODE) return false;
    return (
      window.matchMedia('(pointer:coarse)').matches ||
      window.matchMedia('(any-pointer:coarse)').matches
    );
  }
}
