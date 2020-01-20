import React from 'react';
import PropTypes from 'prop-types';
import { DndProvider } from 'react-dnd';

import componentType from 'common/proptypes/react.proptypes';

import hasTouchScreen from 'common/dnd/utils/has-touch-screen';
import useDndManager from 'common/dnd/wrapper/drag-and-drop.hooks';
import TouchPreview from 'common/dnd/touch-preview/touch-preview.component';

function DragAndDrop({
  children,
  renderTouchPreview,
  touchPreviewZIndex,
  allowVerticalScrolling,
  allowHorizontalScrolling,
}) {
  const isTouch = hasTouchScreen();

  const manager = useDndManager(isTouch, allowVerticalScrolling, allowHorizontalScrolling);

  return (
    <DndProvider manager={manager.current.dragDropManager}>
      {children}
      {isTouch && <TouchPreview zIndex={touchPreviewZIndex}>{renderTouchPreview}</TouchPreview>}
    </DndProvider>
  );
}

DragAndDrop.propTypes = {
  children: componentType.isRequired,
  renderTouchPreview: PropTypes.func.isRequired,
  touchPreviewZIndex: PropTypes.number,
  allowVerticalScrolling: PropTypes.bool,
  allowHorizontalScrolling: PropTypes.bool,
};

DragAndDrop.defaultProps = {
  touchPreviewZIndex: 1,
  allowVerticalScrolling: false,
  allowHorizontalScrolling: false,
};

export default DragAndDrop;
