import { connect } from 'react-redux';

import { getColumn } from '../../../store/selectors/columns';
import { renameColumn } from '../../../store/actions/columns';

function ColumnContainer({ columnId, renderColumn, column, rename }) {
  const { title, cards } = column;
  return renderColumn({
    id: columnId,
    title,
    cards,
    rename,
  });
}

const mapStateToProps = (state, { columnId }) => ({
  column: getColumn(state, columnId),
});

const mapDispatchToProps = (dispatch, { columnId }) => ({
  rename: title => dispatch(renameColumn(columnId, title)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColumnContainer);
