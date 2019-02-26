import { getCard } from './cards';

export const getColumn = (store, id) => {
  let columnData = store.columns[id];
  const cards = columnData.cards.map(cardId => ({
    ...getCard(store, cardId),
    id: cardId,
  }));

  return {
    ...columnData,
    cards,
  };
};
