import React from 'react';

import BoardContainer from './containers/Board';

import Board from './components/Board';

export default function Index() {
  return (
    <BoardContainer
      boardId="board-0"
      renderBoard={({
        title,
        columns,
        renameBoard,
        renameColumn,
        removeColumn,
      }) => (
        <Board
          title={title}
          columns={columns}
          renameBoard={renameBoard}
          renameColumn={renameColumn}
          removeColumn={removeColumn}
        />
      )}
    />
  );
}
