import { RENAME_CARD, ADD_CARD } from '../actionTypes';
import { time as id } from 'uniqid';

export const renameCard = (id, title) => ({
  type: RENAME_CARD,
  payload: {
    id,
    title,
  },
});

export const createCard = (title, columnId) => ({
  type: ADD_CARD,
  payload: {
    id: id('card-'),
    title,
    columnId,
  },
});
