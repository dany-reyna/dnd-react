import { createDndContext } from 'react-dnd';
import TouchBackend from 'react-dnd-touch-backend';

const TouchVerticalContext = createDndContext(TouchBackend, null, {
  enableKeyboardEvents: true,
  scrollAngleRanges: [
    { start: 30, end: 150 },
    { start: 210, end: 330 },
  ],
});

export default TouchVerticalContext;
