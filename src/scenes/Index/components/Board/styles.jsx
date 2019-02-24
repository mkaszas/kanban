import styled from 'styled-components';

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Title = styled.div`
  font-size: 18px;
  background-color: rgba(255, 255, 255, 0.4);
`;

export const ColumnList = styled.div`
  flex-grow: 1;

  display: flex;
  align-items: baseline;
  overflow-x: scroll;
  padding: 0 10px;
`;
