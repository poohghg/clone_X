import { HARMFUL_MEDIA_LEVEL } from '@/src/shared/globalContext/web/constant';

export const HARMFUL_MEDIA_LEVEL_TOAST = {
  [HARMFUL_MEDIA_LEVEL.ANDROID_APP_STANDARD]: 'androidApp',
  [HARMFUL_MEDIA_LEVEL.LOGOUT]: 'logoutUser',
  [HARMFUL_MEDIA_LEVEL.NOT_ADULT]: 'minorUser',
  [HARMFUL_MEDIA_LEVEL.IOS_APP]: 'iosApp',
} as const;

export default {};
