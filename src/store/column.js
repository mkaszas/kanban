import Lockr from '.';

const defaultColumn = {
  id: 0,
  title: '',
  cards: [],
};

function update(fn) {
  Lockr.set('columns', fn(Lockr.get('columns')));
}

export function getColumn(id) {
  return Lockr.get('columns').find(column => column.id === id);
}

export function renameColumn(id, title) {
  update(columns => {
    let index = columns.findIndex(column => column.id === id);
    columns[index].title = title;
    return columns;
  });
}

export function createColumn({ title }) {
  update(columns => {
    const id = columns[columns.length - 1].id + 1;
    columns.push({ ...defaultColumn, id, title });
    return columns;
  });
}
