import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from '../Todo';
import './TodoList.scss';

export const TodoList = ({ preparedTodos }) => (
  <ul className="list">
    {preparedTodos.map(todo => (
      <li className="list__item" key={todo.id}>
        <Todo
          title={todo.title}
          completed={todo.completed}
          user={todo.user}
        />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
