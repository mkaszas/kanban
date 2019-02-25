import { time as id } from 'uniqid';
import { RENAME_COLUMN, ADD_COLUMN, REMOVE_COLUMN } from '../actionTypes';

export const renameColumn = (id, title) => ({
  type: RENAME_COLUMN,
  payload: {
    id,
    title,
  },
});

export const createColumn = title => ({
  type: ADD_COLUMN,
  payload: {
    id: id('column-'),
    title,
  },
});

export const removeColumn = id => ({
  type: REMOVE_COLUMN,
  payload: {
    id,
  },
});
