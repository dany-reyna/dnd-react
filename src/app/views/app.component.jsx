import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DragAndDrop from 'common/dnd/wrapper/drag-and-drop.component';
import Knight, { KnightGhost } from 'knight/knight.component';
import Square from 'square/square.component';

const StyledBoard = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
`;

function App({ knightPosition }) {
  const [knightX, knightY] = knightPosition;

  const renderDragLayer = useCallback(item => {
    return <KnightGhost>{item.id}</KnightGhost>;
  }, []);

  return (
    <DragAndDrop renderDragLayer={renderDragLayer}>
      <StyledBoard>
        {[...Array(64).keys()].map(i => {
          const x = i % 8;
          const y = Math.floor(i / 8);

          return (
            <Square key={i} x={x} y={y}>
              {x === knightX && y === knightY ? <Knight previewImage /> : null}
            </Square>
          );
        })}
      </StyledBoard>
    </DragAndDrop>
  );
}

App.propTypes = {
  knightPosition: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default App;
