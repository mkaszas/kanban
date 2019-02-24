import Lockr from 'lockr';

import { BOARDS, COLUMNS, CARDS } from './sample-data';

const prefix = 'mk-sp-kanban-';

export function init() {
  Lockr.prefix = prefix;
  if (!Lockr.get('init')) {
    Lockr.set('init', true);
    Lockr.set('boards', BOARDS);
    Lockr.set('columns', COLUMNS);
    Lockr.set('cards', CARDS);
  }
}

export default Lockr;
