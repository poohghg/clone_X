import React from 'react';
import classNames from 'classnames/bind';
import st from './IconDotPulse.module.scss';

const cn = classNames.bind(st);

interface Props {
  size?: number;
  speed?: number;
  color?: string;
}

const IconDotPulse = ({ speed = 1500, color = '#666', size = 30 }: Props) => {
  const dotStyle = {
    '--uib-size': `${size}px`,
    '--uib-speed': `${speed}ms`,
    '--uib-color': `${color}`,
  } as React.CSSProperties;
  return (
    <div className={cn('dot-pulse')} style={dotStyle}>
      <div className={cn('dot-pulse__dot')}></div>
    </div>
  );
};

export default IconDotPulse;
