import { createDndContext } from 'react-dnd';
import TouchBackend from 'react-dnd-touch-backend';

const TouchHorizontalContext = createDndContext(TouchBackend, null, {
  enableKeyboardEvents: true,
  scrollAngleRanges: [{ start: 300 }, { end: 60 }, { start: 120, end: 240 }],
});

export default TouchHorizontalContext;
