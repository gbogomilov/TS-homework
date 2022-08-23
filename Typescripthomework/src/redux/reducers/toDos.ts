import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

interface theInitialState {
  allIds: number[];
  byIds: { [index: number]: { completed: boolean; content: string } };
}

interface anAction {
  payload: { content: string; id: number };
  type: string;
}

const initialState: theInitialState = {
  allIds: [],
  byIds: {},
};

export default function reducer(state = initialState, action: anAction) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content }: { id: number; content: string } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false,
          },
        },
      };
    }
    case TOGGLE_TODO: {
      const { id }: { id: number } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    }
    default:
      return state;
  }
}
