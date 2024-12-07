import { headers } from 'next/headers';
import { HEADER } from '@/src/shared/API/constant/header';
import { APP_ID, APP_ID_IN_AGENT } from '@/src/shared/constant/channel';
import { TAppChannel } from '@/src/shared/model/type/channel';

export default class HeaderForServer {
  static getUserAgent() {
    return headers().get(HEADER.USER_AGENT) ?? '';
  }

  static getRealIp() {
    return headers().get(HEADER.X_REAL_IP.toLowerCase()) ?? '';
  }

  static isHasOutLink() {
    const params = headers().get('x-params');
    if (!params) return false;
    const searchParams = new URLSearchParams(params);
    return searchParams.get('outlink') === 'ok';
  }

  static getSearchParams() {
    const params = headers().get('x-params');
    return new URLSearchParams(params ?? {});
  }

  static getRealUrl() {
    return headers().get('x-realUrl') ?? '';
  }

  // 앱에서 웹뷰 페이지호출시 해당 헤더값을 전달 해준다.
  static getMBAppID() {
    return headers().get(HEADER.MRBLUE_APP_ID) ?? headers().get('Mrblue-App-ID');
  }

  static getReferer() {
    return headers().get('referer') ?? '';
  }

  static getMbAppIdFromHeader() {
    const hostAppId = this.getMBAppID();

    if (!hostAppId) return undefined;

    let result: TAppChannel | undefined;

    Object.entries(APP_ID).forEach(([key, value]) => {
      if (value === hostAppId) {
        result = key as TAppChannel;
      }
    });

    return result;
  }

  static getMbAppIdFromUserAgent() {
    const userAgent = this.getUserAgent();

    let result: TAppChannel | undefined;

    Object.entries(APP_ID_IN_AGENT).forEach(([key, value]) => {
      if (userAgent.includes(value)) {
        result = key as TAppChannel;
      }
    });

    return result;
  }
}
