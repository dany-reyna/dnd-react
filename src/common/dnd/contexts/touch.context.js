import { createDndContext } from 'react-dnd';
import TouchBackend from 'react-dnd-touch-backend';

const TouchContext = createDndContext(TouchBackend, null, {
  enableKeyboardEvents: true,
});

export default TouchContext;
