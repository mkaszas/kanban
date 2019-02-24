import Lockr from '.';

export function getBoard(id) {
  return Lockr.get('boards').find(board => board.id === id);
}
