import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ColumnContainer from '../../containers/Column';

import Column from '../Column';

import { BoardWrapper, Title, ColumnList } from './styles';

Board.propTypes = {
  title: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default function Board({ title, columns, rename }) {
  const [boardTitle, setTitle] = useState(title);

  const handleTitleChange = e => {
    const newTitle = e.target.value;
    rename(newTitle);
    setTitle(newTitle);
  };

  return (
    <BoardWrapper>
      <Title value={boardTitle} onChange={handleTitleChange} />
      <ColumnList>
        {columns.map(columnId => (
          <ColumnContainer
            key={columnId}
            columnId={columnId}
            renderColumn={({ id, title, cards, rename }) => (
              <Column id={id} title={title} cards={cards} rename={rename} />
            )}
          />
        ))}
      </ColumnList>
    </BoardWrapper>
  );
}
