import styled from 'styled-components';

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Title = styled.input`
  font-size: 18px;
  font-weight: bold;
  line-height: 30px;
  height: 30px;
  background-color: #ecf0f1;
  border: none;
  border-radius: 3px;
  padding: 10px;
  margin: 20px 20px 0;

  &:focus {
    outline: none;
  }
`;

export const ColumnList = styled.div`
  flex-grow: 1;

  display: flex;
  align-items: start;
  overflow-x: scroll;
  padding: 0 10px;
`;
