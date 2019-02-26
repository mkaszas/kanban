import { RENAME_CARD, ADD_CARD } from '../actionTypes';

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
    default: {
      return state;
    }
  }
};

export default cards;
