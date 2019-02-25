import styled from 'styled-components';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

export const ColumnWrapper = styled.div`
  position: relative;
  width: 270px;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 10px;
  background-color: #ecf0f1;
  border-radius: 3px;
  margin: 20px 10px;
`;

export const Title = styled.input`
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

export const StyledIcon = styled(Icon)`
  color: #2c3e50;
  position: absolute;
  top: 10px;
  right: 20px;

  cursor: pointer;
`;
