import Lockr from '.';

export function getColumn(id) {
  return Lockr.get('columns').find(column => column.id === id);
}

export function renameColumn(id, title) {
  let columns = Lockr.get('columns');
  let index = columns.findIndex(column => column.id === id);
  columns[index].title = title;
  Lockr.set('columns', columns);
}
