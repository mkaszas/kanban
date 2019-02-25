import { ADD_COLUMN, RENAME_COLUMN, REMOVE_COLUMN } from '../actionTypes';

const initialState = {
  'column-0': {
    title: 'To Do',
    cards: ['card-0', 'card-1'],
  },
};

const columns = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLUMN: {
      const { id, title } = action.payload;
      return {
        ...state,
        [id]: {
          title,
          cards: [],
        },
      };
    }
    case REMOVE_COLUMN: {
      const { id } = action.payload;
      const newState = { ...state };
      delete newState[id];
      return newState;
    }
    case RENAME_COLUMN: {
      const { id, title } = action.payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          title,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default columns;
