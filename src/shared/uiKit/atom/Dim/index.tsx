'use client';

import React from 'react';
import cn from 'classnames';

import st from './Dim.module.scss';

export default function Dim({
  active = true,
  zIndex = 1000,
  handler = () => {},
}: Readonly<{
  active?: boolean;
  zIndex: number;
  handler?: Function;
}>) {
  const dimStyle = {
    '--z-dim': zIndex,
  } as React.CSSProperties;

  const clickHandler = () => {
    handler();
  };

  return (
    <button
      tabIndex={0}
      className={cn(st['dim'], !active && st['hidden'])}
      style={dimStyle}
      onClick={clickHandler}
      title="딤 영역"
    />
  );
}
