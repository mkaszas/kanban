import { RENAME_CARD } from '../actionTypes';

export const renameCard = (id, title) => ({
  type: RENAME_CARD,
  payload: {
    id,
    title,
  },
});
