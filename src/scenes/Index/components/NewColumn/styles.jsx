import styled from 'styled-components';

export const Placeholder = styled.div`
  width: 270px;
  height: 20px;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  margin: 20px 20px 20px 10px;
  cursor: pointer;
`;

export const NewColumnForm = styled.form`
  margin: 20px 10px;
  background-color: #ecf0f1;
`;

export const TitleInput = styled.input`
  background: none;
  border-radius: 3px;
  width: 270px;
  height: 20px;
  padding: 10px;
  flex-shrink: 0;
  flex-grow: 0;

  font-size: 16px;
  font-weight: bold;
  border: none;

  &:focus {
    outline: none;
  }
`;
