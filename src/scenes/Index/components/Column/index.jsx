import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import CardContainer from '../../containers/Card';

import Card from '../Card';

import {
  Title,
  CardsWrapper,
  StyledIcon,
  IconWrapper,
  NewCardButton,
  NewCardWrapper,
  NewCardForm,
  NewCardTitle,
  Button,
} from './styles';

Column.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
  rename: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default function Column({
  style,
  title,
  cards,
  rename,
  remove,
  createCard,
}) {
  const newTitle = useRef(null);
  const [columnTitle, setTitle] = useState(title);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (editing) {
      newTitle.current.focus();
    }
  }, [editing]);

  const handleChange = e => {
    const newTitle = e.target.value;
    rename(newTitle);
    setTitle(newTitle);
  };

  const handleNewCard = () => {
    const { value: cardTitle } = newTitle.current;
    createCard(cardTitle);
    setEditing(false);
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
      <NewCardWrapper>
        {editing ? (
          <NewCardForm>
            <NewCardTitle placeholder="Title" ref={newTitle} />
            <Button variant="success" onClick={handleNewCard}>
              Save
            </Button>
          </NewCardForm>
        ) : (
          <NewCardButton onClick={() => setEditing(true)}>
            <Icon icon="plus" />
          </NewCardButton>
        )}
      </NewCardWrapper>
    </>
  );
}
