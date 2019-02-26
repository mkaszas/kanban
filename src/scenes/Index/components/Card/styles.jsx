import styled from 'styled-components';

export const CardWrapper = styled.div`
  padding: 5px 10px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 45, 66, 0.25);

  margin-bottom: 7px;
`;

export const Title = styled.input`
  font-size: 14px;
  line-height: 20px;
  background: none;
  border: none;

  &:focus {
    outline: none;
  }
`;
