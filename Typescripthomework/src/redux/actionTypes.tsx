export const ADD_TODO: string = "ADD_TODO";
export const TOGGLE_TODO: string = "TOGGLE_TODO";
export const SET_FILTER: string = "SET_FILTER";

export interface Todos {
  completed: boolean;
  content: string;
  id: number;
}

export interface filterInterface {
  activeFilter: string;
  setFilter: (filter: string) => typeActions;
}

export interface addAtoDo {
  type: typeof ADD_TODO;
  payload: {
    id: number;
    content: string;
  };
}
export interface toggleaToDo {
  type: typeof ADD_TODO;
  payload: {
    id: number;
  };
}

export interface setaFilter {
  type: typeof SET_FILTER;
  payload: {
    filter: string;
  };
}

export type typeActions =
  | addAtoDo
  | toggleaToDo
  | setaFilter
  | filterInterface
  | Todos;
