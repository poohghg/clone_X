import { useEffect, useState } from 'react';
import WebHelper from '@/src/shared/lib/helper/WebHelper';

const useActiveVirtualKeyboard = () => {
  const [diffHeight, setDiffHeight] = useState(0);

  useEffect(() => {
    if (!WebHelper.isMobileDevice()) return () => {};

    const resizeHandler = () => {
      const visualViewportHeight = window.visualViewport?.height;
      const { innerHeight } = window;

      if (!visualViewportHeight) return;

      if (innerHeight > visualViewportHeight) {
        const diff = innerHeight - visualViewportHeight;
        setDiffHeight(diff);
      } else {
        setDiffHeight(0);
      }
    };

    visualViewport?.addEventListener('resize', resizeHandler);
    return () => {
      visualViewport?.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return {
    isActive: diffHeight > 0,
    diffHeight,
  };
};

export default useActiveVirtualKeyboard;
