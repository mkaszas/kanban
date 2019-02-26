import { connect } from 'react-redux';

import { getBoard } from '../../../store/selectors/boards';
import { renameBoard } from '../../../store/actions/boards';
import { removeColumn, renameColumn } from '../../../store/actions/columns';
import { createCard, renameCard } from '../../../store/actions/cards';

function BoardContainer({
  boardId,
  renderBoard,
  board,
  renameBoard,
  renameColumn,
  removeColumn,
  createCard,
  renameCard,
}) {
  const { title, columns } = board;
  return renderBoard({
    title,
    columns,
    renameBoard,
    renameColumn,
    removeColumn,
    createCard,
    renameCard,
  });
}

const mapStateToProps = (state, { boardId }) => ({
  board: getBoard(state, boardId),
});

const mapDispatchToProps = (dispatch, { boardId }) => ({
  renameBoard: title => dispatch(renameBoard(boardId, title)),
  renameColumn: (columnId, title) => dispatch(renameColumn(columnId, title)),
  removeColumn: (columnId, cardIds) =>
    dispatch(removeColumn(columnId, cardIds)),
  createCard: (title, columnId) => dispatch(createCard(title, columnId)),
  renameCard: (cardId, title) => dispatch(renameCard(cardId, title)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);
