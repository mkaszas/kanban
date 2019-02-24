import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { CardWrapper, Title } from './styles';

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rename: PropTypes.func.isRequired,
};

export default function Card({ title, rename }) {
  const [cardTitle, setTitle] = useState(title);

  const handleChange = e => {
    const newTitle = e.target.value;
    rename(newTitle);
    setTitle(newTitle);
  };

  return (
    <CardWrapper>
      <Title type="text" value={cardTitle} onChange={handleChange} />
    </CardWrapper>
  );
}
