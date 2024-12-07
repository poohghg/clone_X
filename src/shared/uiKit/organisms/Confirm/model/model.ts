import { ReactNode } from 'react';

export interface IShowConfirm {
  message: ReactNode;
  closeMessage?: ReactNode;
  confirmMessage?: ReactNode;
  isOnlyConfirm?: boolean; // 확인 버튼만 가능
  confirmCb?: () => void;
}
