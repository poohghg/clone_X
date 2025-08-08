import { atom } from 'recoil';
import { IToast } from '@/src/shared/UIKit/organisms/Toast/model/model';

export const toastState = atom<IToast[]>({
  key: 'toastState',
  default: [],
});

const ToastState = {};

export default ToastState;

// Harmflmedia
