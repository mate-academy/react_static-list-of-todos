import React from 'react';
import { ToDo } from './ToDo';

export function TodoList({ preparedTodos }) {
  return (
    preparedTodos.map(todo => (
      <div>
        <ToDo todo={todo} key={todo.id} />
      </div>
    ))
  );
}

// TodoList.propTypes = {
//   preparedTodos: PropTypes.shape({
//     userId: PropTypes.number.isRequired,
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     completed: PropTypes.bulean.isRequired,
//     user: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//     }),
//   }).isRequired,
// };
