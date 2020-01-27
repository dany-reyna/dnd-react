import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDragLayer } from 'react-dnd';

function getLayerStyles(zIndex) {
  return {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex,
    left: 0,
    top: 0,
  };
}

function getItemStyles(currentOffset) {
  if (!currentOffset) {
    return {
      display: 'none',
    };
  }
  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

function DragLayer({ children, zIndex }) {
  const { isDragging, currentOffset, item } = useDragLayer(monitor => {
    return {
      isDragging: monitor.isDragging(),
      currentOffset: monitor.getSourceClientOffset(),
      item: monitor.getItem(),
    };
  });

  const layerStyles = useMemo(() => getLayerStyles(zIndex), [zIndex]);

  if (!isDragging) {
    return null;
  }
  return (
    <div style={layerStyles}>
      <div style={getItemStyles(currentOffset)}>{children(item)}</div>
    </div>
  );
}

DragLayer.propTypes = {
  children: PropTypes.func.isRequired,
  zIndex: PropTypes.number.isRequired,
};

export default DragLayer;
