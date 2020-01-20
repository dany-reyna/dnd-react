import { useRef } from 'react';

import HTML5Context from 'common/dnd/contexts/html5.context';
import TouchContext from 'common/dnd/contexts/touch.context';
import TouchVerticalContext from 'common/dnd/contexts/touch-vertical-scrolling.context';
import TouchHorizontalContext from 'common/dnd/contexts/touch-horizontal-scrolling.context';

function useDndManager(isTouch, allowVerticalScrolling, allowHorizontalScrolling) {
  const manager = useRef(null);

  if (isTouch === true) {
    switch (true) {
      case allowVerticalScrolling: {
        manager.current = TouchVerticalContext;
        break;
      }
      case allowHorizontalScrolling: {
        manager.current = TouchHorizontalContext;
        break;
      }
      default: {
        manager.current = TouchContext;
      }
    }
  } else {
    manager.current = HTML5Context;
  }

  return manager;
}

export default useDndManager;
