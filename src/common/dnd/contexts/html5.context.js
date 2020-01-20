import { createDndContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const HTML5Context = createDndContext(HTML5Backend);

export default HTML5Context;
