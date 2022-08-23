import { typeActions, ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId: number = 0;

export const addTodo = (content: string): typeActions => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const toggleTodo = (id: number): typeActions => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const setFilter = (filter: string): typeActions => ({
  type: SET_FILTER,
  payload: { filter },
});
