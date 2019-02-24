import { getBoard } from '../../../store/board';

export default function BoardContainer({ boardId, renderBoard }) {
  const { id, title, columns } = getBoard(boardId);
  console.log(id, title, columns);
  return renderBoard({ id, title, columns });
}
