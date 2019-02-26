import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

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
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  rename: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default function Column({
  id,
  style,
  title,
  cards,
  rename,
  remove,
  createCard,
  renameCard,
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

  const handleSubmit = e => {
    e.preventDefault();
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
        {cards.map(({ id: cardId, title }) => (
          <Card
            id={cardId}
            key={cardId}
            title={title}
            rename={() => renameCard(cardId)}
            create={title => createCard(title, id)}
          />
        ))}
      </CardsWrapper>
      <NewCardWrapper>
        {editing ? (
          <NewCardForm onSubmit={handleSubmit}>
            <NewCardTitle placeholder="Title" ref={newTitle} />
            <Button variant="success" type="submit">
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
