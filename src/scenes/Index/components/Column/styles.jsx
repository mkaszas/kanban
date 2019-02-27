import styled from 'styled-components';
import posed from 'react-pose';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { switchProp } from 'styled-tools';

export const ColumnWrapper = styled(
  posed.div({
    enter: {
      opacity: 1,
      width: '270px',
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
      marginLeft: '0px',
      marginRight: '0px',
    },
  })
)`
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
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
  background: none;
  border: none;
  padding: 10px 0 0 10px;

  &:focus {
    outline: none;
  }
`;

export const CardsWrapper = styled.div`
  padding: 0 10px;
`;

export const IconWrapper = posed.div({
  enter: { opacity: 1, delay: 100, transition: { duration: 100 } },
  exit: { opacity: 0, transition: { duration: 100 } },
});

export const StyledIcon = styled(Icon)`
  color: #2c3e50;
  position: absolute;
  top: 10px;
  right: 20px;

  cursor: pointer;
`;

export const NewCardWrapper = styled.div``;

const PosedButton = posed.button({
  enter: { opacity: 1, transition: { duration: 100 } },
  exit: { opacity: 0, transition: { duration: 100 } },
});

export const NewCardButton = styled(PosedButton)`
  border: none;
  background: none;
  cursor: pointer;
  height: 30px;
  width: 100%;
  text-align: left;
  padding: 0 0 0 10px;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #bdc3c7;
  }
`;

export const NewCardForm = styled.form`
  padding: 0 10px;
`;

export const NewCardTitle = styled.input`
  font-size: 14px;
  line-height: 20px;
  border: none;
  width: 230px;
  min-height: 40px;
  resize: none;

  padding: 5px 10px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 45, 66, 0.25);

  margin-bottom: 7px;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  border: none;
  width: 80px;
  margin-right: 10px;
  margin-bottom: 10px;
  height: 30px;
  font-size: 14px;
  font-weight: 400;

  border-radius: 3px;
  color: white;
  cursor: pointer;

  background-color: ${switchProp('variant', {
    success: `#2ecc71`,
    cancel: `#bdc3c7`,
  })};
  border-bottom: 2px solid
    ${switchProp('variant', {
      success: `#27ae60`,
      cancel: `#95a5a6`,
    })};

  &:focus {
    outline: none;
  }
`;
