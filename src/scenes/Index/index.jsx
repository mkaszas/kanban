import React from 'react';

import BoardContainer from './containers/Board';

import Board from './components/Board';

export default function Index() {
  return (
    <BoardContainer
      boardId="board-01"
      renderBoard={({ title, columns }) => (
        <Board title={title} columns={columns} />
      )}
    />
  );
}
