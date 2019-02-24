import React from 'react';
import PropTypes from 'prop-types';

import { CardWrapper } from './styles';

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default function Card({ title }) {
  return <CardWrapper>{title}</CardWrapper>;
}
