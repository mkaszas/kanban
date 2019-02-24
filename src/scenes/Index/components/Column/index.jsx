import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';

import { ColumnWrapper, Title, CardsWrapper } from './styles';

Column.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(Card.propTypes).isRequired,
};

export default function Column({ title, cards }) {
  return (
    <ColumnWrapper>
      <Title>{title}</Title>
      <CardsWrapper>
        {cards.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </CardsWrapper>
    </ColumnWrapper>
  );
}
