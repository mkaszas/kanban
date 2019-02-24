import Lockr from '.';

export function getCard(id) {
  return Lockr.get('cards').find(card => card.id === id);
}

export function renameCard(id, title) {
  let cards = Lockr.get('cards');
  let index = cards.findIndex(cards => cards.id === id);
  cards[index].title = title;
  Lockr.set('cards', cards);
}
