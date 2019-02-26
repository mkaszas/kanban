import styled from 'styled-components';
import { switchProp } from 'styled-tools';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import posed from 'react-pose';

export const Wrapper = styled.div`
  position: relative;
`;

const PosedPlaceholder = posed.div({
  enter: {
    opacity: 1,
    height: '20px',
    transition: {
      type: 'spring',
      velocity: 20,
      stiffness: 450,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    height: '70px',
    transition: {
      type: 'spring',
      velocity: 20,
      stiffness: 450,
      damping: 30,
    },
  },
});

export const Placeholder = styled(PosedPlaceholder)`
  position: absolute;
  width: 270px;
  height: 20px;
  text-align: center;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  margin: 20px 20px 20px 10px;
  cursor: pointer;
`;

const PosedForm = posed.form({
  enter: {
    opacity: 1,
    height: '70px',
    transition: {
      type: 'spring',
      velocity: 20,
      stiffness: 450,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    height: '20px',
    transition: {
      type: 'spring',
      velocity: 20,
      stiffness: 450,
      damping: 30,
    },
  },
});

export const NewColumnForm = styled(PosedForm)`
  position: absolute;
  width: 270px;
  flex-grow: 0;
  flex-shrink: 0;
  margin: 20px 20px 20px 10px;
  padding: 10px;
  border-radius: 3px;
  background-color: #ecf0f1;
`;

const PosedInput = posed.input({
  enter: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 100 } },
});

export const TitleInput = styled(PosedInput)`
  background: none;
  margin-bottom: 20px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const StyledIcon = styled(Icon)`
  font-size: 22px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.6);
`;

const PosedButton = posed.button({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.95 },
  enter: { opacity: 1, delay: 100 },
  exit: { opacity: 0, transition: { duration: 100 } },
});

export const Button = styled(PosedButton)`
  border: none;
  width: 80px;
  margin-right: 10px;
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
