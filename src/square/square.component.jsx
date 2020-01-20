import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';

import componentType from 'common/proptypes/react.proptypes';
import ChessDragTypes from 'common/dragtypes/chess.dragtypes';
import { canMoveKnight, moveKnight } from 'app/state/app.observer';
import Overlay from './overlay.component';

const StyledDiv = styled.div`
  position: relative;
  width: 12.5%;
  height: 12.5%;
  background-color: ${props => (props.black ? 'black' : 'white')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Square({ x, y, children }) {
  const black = (x + y) % 2 === 1;

  const [{ isOver, canDrop }, connectDrop] = useDrop({
    accept: ChessDragTypes.KNIGHT,
    canDrop: () => {
      return canMoveKnight(x, y);
    },
    drop: () => {
      moveKnight(x, y);
    },
    collect: monitor => {
      return {
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      };
    },
  });

  return (
    <StyledDiv ref={connectDrop} black={black}>
      {children}
      {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
      {isOver && canDrop && <Overlay color="limegreen" />}
    </StyledDiv>
  );
}

Square.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  children: componentType,
};

Square.defaultProps = {
  children: null,
};

export default Square;
