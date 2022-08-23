import { VISIBILITY_FILTERS } from "../constants";

type selectorsType = {
  todos: { allIds: []; byIds: { [index: number]: {} } };
  visibilityFilter: string;
};

export const getTodosState = (store: selectorsType) => {
  //console.log(store);
  return store.todos;
};

export const getTodoList = (store: selectorsType) =>
  getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store: selectorsType, id: number) => {
  //console.log(id);
  //console.log(store);
  return getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};
};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getTodos = (store: selectorsType) =>
  getTodoList(store).map((id: number) => getTodoById(store, id));

export const getTodosByVisibilityFilter = (
  store: {
    todos: {
      allIds: [];
      byIds: { [index: number]: { completed: boolean; content: string } };
    };
    visibilityFilter: string;
  },
  visibilityFilter: string
) => {
  const allTodos: any = getTodos(store);
  console.log(allTodos);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter(
        (todo: { completed: boolean; content: string; id: number }) => {
          console.log(todo);
          return todo.completed;
        }
      );
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter(
        (todo: { completed: boolean; content: string; id: number }) =>
          !todo.completed
      );
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};
