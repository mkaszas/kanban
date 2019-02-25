import { ADD_COLUMN, RENAME_BOARD } from '../actionTypes';

const initialState = {
  selected: 'board-0',
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
    case ADD_COLUMN: {
      const { id } = action.payload;
      const selectedBoard = state.selected;
      return {
        ...state,
        [selectedBoard]: {
          ...state[selectedBoard],
          columns: [...state[selectedBoard].columns, id],
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default boards;
