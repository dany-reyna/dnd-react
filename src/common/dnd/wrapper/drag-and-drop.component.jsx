import React from 'react';
import PropTypes from 'prop-types';
import { DndProvider } from 'react-dnd';

import componentType from 'common/proptypes/react.proptypes';

import hasTouchScreen from 'common/dnd/utils/has-touch-screen';
import useDndManager from 'common/dnd/wrapper/drag-and-drop.hooks';
import DragLayer from 'common/dnd/drag-layer/drag-layer.component';

function DragAndDrop({
  children,
  renderDragLayer,
  dragLayerZIndex,
  allowVerticalScrolling,
  allowHorizontalScrolling,
}) {
  const isTouch = hasTouchScreen();
  const manager = useDndManager(isTouch, allowVerticalScrolling, allowHorizontalScrolling);

  return (
    <DndProvider manager={manager.current.dragDropManager}>
      {children}
      <DragLayer zIndex={dragLayerZIndex}>{renderDragLayer}</DragLayer>
    </DndProvider>
  );
}

DragAndDrop.propTypes = {
  children: componentType.isRequired,
  renderDragLayer: PropTypes.func.isRequired,
  dragLayerZIndex: PropTypes.number,
  allowVerticalScrolling: PropTypes.bool,
  allowHorizontalScrolling: PropTypes.bool,
};

DragAndDrop.defaultProps = {
  dragLayerZIndex: 1,
  allowVerticalScrolling: false,
  allowHorizontalScrolling: false,
};

export default DragAndDrop;
