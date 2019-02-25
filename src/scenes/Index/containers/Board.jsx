import { connect } from 'react-redux';

import { getBoard } from '../../../store/selectors/boards';
import { renameBoard } from '../../../store/actions/boards';

function BoardContainer({ boardId, renderBoard, board, rename }) {
  const { title, columns } = board;
  return renderBoard({
    title,
    columns,
    rename,
  });
}

const mapStateToProps = (state, props) => ({
  board: getBoard(state, props.boardId),
});

const mapDispatchToProps = (dispatch, props) => ({
  rename: title => dispatch(renameBoard(props.boardId, title)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);
