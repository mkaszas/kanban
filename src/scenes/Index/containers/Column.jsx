import { getColumn, renameColumn } from '../../../store/column';

export default function ColumnContainer({ columnId, renderColumn }) {
  const { id, title, cards } = getColumn(columnId);
  return renderColumn({
    id,
    title,
    cards,
    rename: title => renameColumn(id, title),
  });
}
