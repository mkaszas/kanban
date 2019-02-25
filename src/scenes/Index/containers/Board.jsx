import { connect } from 'react-redux';

import { getBoard } from '../../../store/selectors/boards';
import { renameBoard } from '../../../store/actions/boards';
import { removeColumn, renameColumn } from '../../../store/actions/columns';

function BoardContainer({
  boardId,
  renderBoard,
  board,
  renameBoard,
  renameColumn,
  removeColumn,
}) {
  const { title, columns } = board;
  return renderBoard({
    title,
    columns,
    renameBoard,
    renameColumn,
    removeColumn,
  });
}

const mapStateToProps = (state, { boardId }) => ({
  board: getBoard(state, boardId),
});

const mapDispatchToProps = (dispatch, { boardId }) => ({
  renameBoard: title => dispatch(renameBoard(boardId, title)),
  renameColumn: (columnId, title) => dispatch(renameColumn(columnId, title)),
  removeColumn: columnId => dispatch(removeColumn(columnId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);
