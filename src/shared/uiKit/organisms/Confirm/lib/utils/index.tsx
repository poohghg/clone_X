import { IShowConfirm } from '@/src/shared/UIKit/organisms/Confirm/model/model';
import React from 'react';

export function getAppContentConfirm(): IShowConfirm {
  return {
    isOnlyConfirm: true,
    message: (
      <p style={{ textAlign: 'center' }}>
        앱에서는 이용할 수 없는 작품입니다.
        <br /> 모바일 웹에서 이용 가능합니다.
      </p>
    ),
    confirmMessage: (
      <strong
        style={{
          color: 'var(--blue-01)',
          fontWeight: 'normal',
        }}
      >
        확인
      </strong>
    ),
  };
}

export default {};
