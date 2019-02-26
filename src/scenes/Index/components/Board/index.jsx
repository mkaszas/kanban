import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PoseGroup } from 'react-pose';

import Column from '../Column';
import NewColumn from '../NewColumn';

import { ColumnWrapper } from '../Column/styles';
import { BoardWrapper, Title, ColumnList } from './styles';

Board.propTypes = {
  title: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function Board({
  title,
  columns,
  renameBoard,
  renameColumn,
  removeColumn,
  createCard,
  renameCard,
}) {
  const [boardTitle, setTitle] = useState(title);

  const handleTitleChange = e => {
    const newTitle = e.target.value;
    renameBoard(newTitle);
    setTitle(newTitle);
  };

  return (
    <BoardWrapper>
      <Title value={boardTitle} onChange={handleTitleChange} />
      <ColumnList>
        <PoseGroup flipMove={false}>
          {columns.map(({ id, title, cards }) => (
            <ColumnWrapper key={id}>
              <Column
                key={id}
                id={id}
                title={title}
                cards={cards}
                rename={title => renameColumn(id, title)}
                remove={() => removeColumn(id, cards.map(card => card.id))}
                createCard={title => createCard(title, id)}
                renameCard={renameCard}
              />
            </ColumnWrapper>
          ))}
        </PoseGroup>
        <NewColumn />
      </ColumnList>
    </BoardWrapper>
  );
}
