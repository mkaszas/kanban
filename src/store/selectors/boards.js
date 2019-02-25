import { getColumn } from './columns';

export const getBoard = (store, id) => {
  let boardData = store.boards[id];
  const columns = boardData.columns.map(columnId => ({
    ...getColumn(store, columnId),
    id: columnId,
  }));

  return {
    ...boardData,
    columns,
  };
};
