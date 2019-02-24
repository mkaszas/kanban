import { RENAME_COLUMN } from '../actionTypes';

const initialState = {
  'column-0': {
    title: 'To Do',
    cards: ['card-0', 'card-1'],
  },
};

const columns = (state = initialState, action) => {
  switch (action.type) {
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
