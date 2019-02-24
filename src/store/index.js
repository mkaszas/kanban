import Lockr from 'lockr';

import { BOARDS } from './sample-data';

const prefix = 'mk-sp-kanban-';

export function init() {
  Lockr.prefix = prefix;
  if (!Lockr.get('init')) {
    Lockr.set('init', true);
    Lockr.set('boards', BOARDS);
  }
}

export default Lockr;
