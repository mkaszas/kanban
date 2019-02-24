import { getBoard, renameBoard } from '../../../store/board';

export default function BoardContainer({ boardId, renderBoard }) {
  const { id, title, columns } = getBoard(boardId);
  return renderBoard({
    id,
    title,
    columns,
    rename: title => renameBoard(id, title),
  });
}
