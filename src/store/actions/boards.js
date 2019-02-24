import { RENAME_BOARD } from '../actionTypes';

export const renameBoard = (id, title) => ({
  type: RENAME_BOARD,
  payload: {
    id,
    title,
  },
});
