import { getCard, renameCard } from '../../../store/card';

export default function CardContainer({ cardId, renderCard }) {
  const { id, title } = getCard(cardId);
  return renderCard({
    id,
    title,
    rename: title => renameCard(id, title),
  });
}
