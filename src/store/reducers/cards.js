import { RENAME_CARD, ADD_CARD, REMOVE_COLUMN } from '../actionTypes';

const initialState = {
  'card-0': {
    title: 'Add more columns',
  },
  'card-1': {
    title: 'Add more cards',
  },
};

const cards = (state = initialState, action) => {
  switch (action.type) {
    case RENAME_CARD: {
      const { id, title } = action.payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          title,
        },
      };
    }
    case ADD_CARD: {
      const { id, title } = action.payload;
      return {
        ...state,
        [id]: {
          title,
        },
      };
    }
    case REMOVE_COLUMN: {
      const { cards } = action.payload;
      let newState = { ...state };
      cards.forEach(card => delete newState[card]);
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default cards;
