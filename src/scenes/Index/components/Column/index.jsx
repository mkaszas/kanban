import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CardContainer from '../../containers/Card';

import Card from '../Card';

import { ColumnWrapper, Title, CardsWrapper } from './styles';

Column.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.number).isRequired,
  rename: PropTypes.func.isRequired,
};

export default function Column({ title, cards, rename }) {
  const [columnTitle, setTitle] = useState(title);

  const handleChange = e => {
    const newTitle = e.target.value;
    rename(newTitle);
    setTitle(newTitle);
  };

  return (
    <ColumnWrapper>
      <Title value={columnTitle} onChange={handleChange} />
      <CardsWrapper>
        {cards.map(cardId => (
          <CardContainer
            key={cardId}
            cardId={cardId}
            renderCard={({ id, title }) => <Card id={id} title={title} />}
          />
        ))}
      </CardsWrapper>
    </ColumnWrapper>
  );
}
