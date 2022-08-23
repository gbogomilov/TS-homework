import React, { ReactElement } from "react";
import { connect } from "react-redux";
import Todo from "./ToDo";
// import { getTodos } from "../redux/selectors";
import { getTodosByVisibilityFilter } from "../redux/selectors";
// import { VISIBILITY_FILTERS } from "../constants";

//{  todos: { completed: boolean;content: string; id: number }[];}

interface toDoList {
  todos: { content: string; completed: boolean; id: number }[];
}

const TodoList: React.FC<toDoList> = ({ todos }): ReactElement | null => {
  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map(
            (todo: { content: string; completed: boolean; id: number }) => {
              return <Todo key={`todo-${todo.id}`} todo={todo} />;
            }
          )
        : "No todos, yay!"}
    </ul>
  );
};

// const mapStateToProps = state => {
//   const { byIds, allIds } = state.todos || {};
//   const todos =
//     allIds && state.todos.allIds.length
//       ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
//       : null;
//   return { todos };
// };

const mapStateToProps = (state: {
  todos: {
    allIds: [];
    byIds: { [index: number]: { completed: boolean; content: string } };
  };
  visibilityFilter: string;
}) => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
  //   const allTodos = getTodos(state);
  //   return {
  //     todos:
  //       visibilityFilter === VISIBILITY_FILTERS.ALL
  //         ? allTodos
  //         : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
  //           ? allTodos.filter(todo => todo.completed)
  //           : allTodos.filter(todo => !todo.completed)
  //   };
};
// export default TodoList;
export default connect(mapStateToProps)(TodoList);
