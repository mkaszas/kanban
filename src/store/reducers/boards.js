import { RENAME_BOARD } from '../actionTypes';

const initialState = {
  'board-0': {
    title: 'Your first Board',
    columns: ['column-0'],
  },
};

const boards = (state = initialState, action) => {
  switch (action.type) {
    case RENAME_BOARD: {
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

export default boards;
