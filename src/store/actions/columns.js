import { RENAME_COLUMN } from '../actionTypes';

export const renameColumn = (id, title) => ({
  type: RENAME_COLUMN,
  payload: {
    id,
    title,
  },
});
