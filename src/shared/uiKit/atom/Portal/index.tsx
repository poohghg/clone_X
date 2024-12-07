'use client';

import React, { useRef } from 'react';
import { createPortal } from 'react-dom';

type TRootKey = 'ModalRoot' | 'ToastRoot' | 'ConfirmRoot';

interface PortalProps {
  id?: TRootKey;
  children: React.ReactNode;
}

export default function Portal({ id = 'ModalRoot', children }: Readonly<PortalProps>) {
  const portalRef = useRef<HTMLDivElement | null>(
    document.getElementById(id) as HTMLDivElement | null,
  );

  return portalRef.current ? createPortal(children, portalRef.current) : null;
}
