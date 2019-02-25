import { connect } from 'react-redux';

import { getColumn } from '../../../store/selectors/columns';
import { renameColumn, removeColumn } from '../../../store/actions/columns';

function ColumnContainer({ columnId, renderColumn, column, rename, remove }) {
  const { title, cards } = column;
  return renderColumn({
    id: columnId,
    title,
    cards,
    rename,
    remove,
  });
}

const mapStateToProps = (state, { columnId }) => ({
  column: getColumn(state, columnId),
});

const mapDispatchToProps = (dispatch, { columnId }) => ({
  rename: title => dispatch(renameColumn(columnId, title)),
  remove: () => dispatch(removeColumn(columnId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColumnContainer);
