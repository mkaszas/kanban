import React from 'react';

import Board from './components/Board';

const CARDS = [
  {
    id: 'card-01',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    id: 'card-02',
    title: 'World',
  },
  {
    id: 'card-03',
    title: 'Three',
  },
  {
    id: 'card-04',
    title: 'Four',
  },
];

const COLUMNS = [
  {
    id: 'col-01',
    title: 'Column 1',
    cards: CARDS,
  },
  {
    id: 'col-02',
    title: 'Column 2',
    cards: [CARDS[0]],
  },
  {
    id: 'col-03',
    title: 'Column 3',
    cards: CARDS,
  },
  {
    id: 'col-04',
    title: 'Column 1',
    cards: CARDS,
  },
  {
    id: 'col-05',
    title: 'Column 2',
    cards: [CARDS[0]],
  },
  {
    id: 'col-06',
    title: 'Column 3',
    cards: CARDS,
  },
];

export default function Index() {
  return <Board title="My first board" columns={COLUMNS} />;
}
