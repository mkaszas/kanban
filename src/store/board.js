import Lockr from '.';

export function getBoard(id) {
  return Lockr.get('boards').find(board => board.id === id);
}

export function renameBoard(id, title) {
  let boards = Lockr.get('boards');
  let index = boards.findIndex(board => board.id === id);
  boards[index].title = title;
  Lockr.set('boards', boards);
}
