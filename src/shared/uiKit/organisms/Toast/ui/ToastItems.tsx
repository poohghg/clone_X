import classNames from 'classnames/bind';
import { ReactNode, MouseEvent } from 'react';
import useIsCheckLogin from '@/src/shared/globalContext/user/lib/hooks/useIsCheckLogin';
import useAppPageRouter from '@/src/shared/lib/hooks/useAppPageRouter';
import Icon from '@/src/shared/UIKit/atom/Icon';
import useModal from '@/src/shared/lib/hooks/useModal';
import callApp from '@/src/shared/globalContext/app';
import { useWebContext } from '@/src/shared/globalContext/web/lib/hooks/useWebContext';
import st from './ToastItems.module.scss';

const cn = classNames.bind(st);

/**
 * 청소년 유해매체 차단 안내 메시지 참조
 * https://wiki.mrblue.com/pages/viewpage.action?pageId=209552829
 */

interface Props {
  children: ReactNode;
  clickHandler?: (e?: MouseEvent<HTMLButtonElement>) => void;
}

const Base = ({ children, clickHandler }: Props) => {
  return (
    <button type={'button'} className={cn('harmful-button')} onClick={clickHandler}>
      <Icon
        style={{
          flexShrink: 0,
        }}
        type={'labelAdult'}
        pSizes={{ width: '22px', height: '22px' }}
      />
      {children}
    </button>
  );
};

// 안드로이드 일반판
export function AndroidApp() {
  const appRouter = useAppPageRouter();

  const clickHandler = () => {
    appRouter('/cs/faq');
  };

  return (
    <Base clickHandler={clickHandler}>
      <p className={cn('harmful-text')}>
        구글 플레이 정책에 따라 19세 이용가 작품이 제공되지 않습니다. 자세한 내용은{' '}
        <b>고객센터</b>에서 확인하세요.
      </p>
    </Base>
  );
}

// IOS
export function IOSApp() {
  return (
    <Base>
      <p className={cn('harmful-text')}>앱에서는 성인 이용가 작품이 제공되지 않습니다.</p>
    </Base>
  );
}

// 미인증 + 미성년 + 성인 + 19OFF
export function MinorUser() {
  return (
    <Base>
      <p className={cn('harmful-text')}>
        19세 미만 청소년에게 유해한 정보를 차단했습니다.
      </p>
    </Base>
  );
}

// 미로그인
export function LogoutUser() {
  const { isCheckLogin } = useIsCheckLogin();

  const clickHandler = () => {
    isCheckLogin();
  };

  return (
    <Base clickHandler={clickHandler}>
      <div>
        <p className={cn('harmful-text')}>
          19세 미만 청소년에게 유해한 정보를 차단했습니다.
        </p>
        <p className={cn('harmful-text')}>
          <b>로그인</b> 후 확인하세요.
        </p>
      </div>
    </Base>
  );
}

// 관심장르
const RecomGenreBase = ({ children, clickHandler }: Props) => {
  return (
    <button type={'button'} className={cn('recom-genre-button')} onClick={clickHandler}>
      {children}
    </button>
  );
};

export function RecomGenreLogout() {
  const { isCheckLogin } = useIsCheckLogin();

  const clickHandler = () => {
    isCheckLogin();
  };

  return (
    <RecomGenreBase clickHandler={clickHandler}>
      <p>관심있는 장르의 랭킹만 확인해보세요.</p>
      <p>관심장르 설정</p>
    </RecomGenreBase>
  );
}
export function RecomGenreSet() {
  const { onOpen } = useModal('RECOM_GENRE');
  const { hostAppChannel } = useWebContext();

  const clickHandler = () => {
    if (hostAppChannel) {
      callApp('showModal', {
        target: 'interestsGenres',
      });
    } else {
      onOpen();
    }
  };

  return (
    <RecomGenreBase clickHandler={clickHandler}>
      <p>관심있는 장르의 랭킹만 확인해보세요.</p>
      <p>관심장르 설정</p>
    </RecomGenreBase>
  );
}
export function RecomGenreUpdate() {
  const { onOpen } = useModal('RECOM_GENRE');
  const { hostAppChannel } = useWebContext();

  const clickHandler = () => {
    if (hostAppChannel) {
      callApp('showModal', {
        target: 'interestsGenres',
      });
    } else {
      onOpen();
    }
  };

  return (
    <RecomGenreBase clickHandler={clickHandler}>
      <p>관심 장르의 랭킹만 보는 중입니다.</p>
      <p>장르 재설정</p>
    </RecomGenreBase>
  );
}
