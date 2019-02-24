import React from 'react';

import Column from './components/Column';

const CARDS = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    id: 2,
    title: 'World',
  },
  {
    id: 3,
    title: 'Three',
  },
  {
    id: 4,
    title: 'Four',
  },
];

export default function Index() {
  return <Column title="Title" cards={CARDS} />;
}
