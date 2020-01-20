import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDrag, DragPreviewImage } from 'react-dnd';

import ChessDragTypes from 'common/dragtypes/chess.dragtypes';
import knightImage from 'common/assets/knight-image';

import device from 'common/styles/media-queries';

export const StyledKnight = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
  cursor: move;
  background-color: #f2d5bb;
  border-radius: 8px;
  transform: translate(0, 0); // to remove squared background in chrome
  ${device.tabletPortrait} {
    font-size: 4rem;
  }
  ${device.desktop} {
    font-size: 6rem;
  }
`;

const DraggableKnight = styled(StyledKnight)`
  opacity: ${props => (props.isDragging ? 0 : 1)};
`;

function Knight({ previewImage }) {
  const [{ isDragging }, connectDrag, connectPreview] = useDrag({
    item: {
      id: 123,
      type: ChessDragTypes.KNIGHT,
    },
    collect: monitor => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  });

  return (
    <>
      {previewImage && <DragPreviewImage connect={connectPreview} src={knightImage} />}
      <DraggableKnight ref={connectDrag} isDragging={isDragging}>
        ♘
      </DraggableKnight>
    </>
  );
}

Knight.propTypes = {
  previewImage: PropTypes.bool,
};

Knight.defaultProps = {
  previewImage: false,
};

export default Knight;
