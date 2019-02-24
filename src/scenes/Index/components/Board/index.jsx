import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Column from '../Column';

import { BoardWrapper, Title, ColumnList } from './styles';

Board.propTypes = {
  title: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(Column.propTypes).isRequired,
};

export default function Board({ title, columns, rename }) {
  const [boardTitle, setTitle] = useState(title);

  const handleTitleChange = e => {
    const newTitle = e.target.value;
    console.log(newTitle);
    rename(newTitle);
    setTitle(newTitle);
  };

  return (
    <BoardWrapper>
      <Title value={boardTitle} onChange={handleTitleChange} />
      <ColumnList>
        {columns.map(column => (
          <Column key={column.id} {...column} />
        ))}
      </ColumnList>
    </BoardWrapper>
  );
}
