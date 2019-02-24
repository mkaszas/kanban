import Lockr from '.';

function update(fn) {
  Lockr.set('boards', fn(Lockr.get('boards')));
}

export function getBoard(id) {
  return Lockr.get('boards').find(board => board.id === id);
}

export function renameBoard(id, title) {
  update(boards => {
    let index = boards.findIndex(board => board.id === id);
    boards[index].title = title;
    return boards;
  });
}

export function addColumn(boardId, columnId) {
  update(boards => {
    let index = boards.findIndex(board => board.id === boardId);
    boards[index].columns.push(columnId);
    return boards;
  });
}
