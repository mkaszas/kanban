import React from 'react';
import PropTypes from 'prop-types';

import Column from '../Column';

import { BoardWrapper, Title, ColumnList } from './styles';

Board.propTypes = {
  title: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(Column.propTypes).isRequired,
};

export default function Board({ title, columns }) {
  return (
    <BoardWrapper>
      <Title>{title}</Title>
      <ColumnList>
        {columns.map(column => (
          <Column key={column.id} {...column} />
        ))}
      </ColumnList>
    </BoardWrapper>
  );
}
