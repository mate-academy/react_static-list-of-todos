import React from 'react';
import PropTypes from 'prop-types';

import './TodoList.scss';
import { Todo } from '../Todo';

export const TodoList = ({ todos }) => (
  <ul className="list">
    {todos.map(todo => (
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
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      user: PropTypes.objectOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
};
