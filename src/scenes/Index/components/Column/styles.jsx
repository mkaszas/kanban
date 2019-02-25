import styled from 'styled-components';
import posed from 'react-pose';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

export const ColumnWrapper = styled(
  posed.div({
    enter: {
      opacity: 1,
      width: '270px',
      paddingLeft: '10px',
      paddingRight: '10px',
      marginLeft: '10px',
      marginRight: '10px',
      transition: {
        type: 'spring',
        velocity: 20,
        stiffness: 450,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      width: '0px',
      paddingLeft: '0px',
      paddingRight: '0px',
      marginLeft: '0px',
      marginRight: '0px',
    },
  })
)`
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 10px;
  background-color: #ecf0f1;
  border-radius: 3px;
  margin: 20px 10px;
  overflow: hidden;
`;

export const Title = styled(
  posed.input({
    enter: { opacity: 1, transition: { duration: 100 } },
    exit: { opacity: 0, transition: { duration: 100 } },
  })
)`
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: bold;
  padding-left: 10px;
  background: none;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const CardsWrapper = styled.div``;

export const IconWrapper = posed.div({
  enter: { opacity: 1, transition: { duration: 100 } },
  exit: { opacity: 0, transition: { duration: 100 } },
});

export const StyledIcon = styled(Icon)`
  color: #2c3e50;
  position: absolute;
  top: 10px;
  right: 20px;

  cursor: pointer;
`;
