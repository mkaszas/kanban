import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CardContainer from '../../containers/Card';

import Card from '../Card';

import { Title, CardsWrapper, StyledIcon, IconWrapper } from './styles';

Column.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
  rename: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default function Column({ style, title, cards, rename, remove }) {
  const [columnTitle, setTitle] = useState(title);

  const handleChange = e => {
    const newTitle = e.target.value;
    rename(newTitle);
    setTitle(newTitle);
  };

  return (
    <>
      <Title value={columnTitle} onChange={handleChange} />
      <IconWrapper>
        <StyledIcon icon="trash" onClick={() => remove()} />
      </IconWrapper>
      <CardsWrapper>
        {cards.map(cardId => (
          <CardContainer
            key={cardId}
            cardId={cardId}
            renderCard={({ id, title, rename }) => (
              <Card id={id} title={title} rename={rename} />
            )}
          />
        ))}
      </CardsWrapper>
    </>
  );
}
