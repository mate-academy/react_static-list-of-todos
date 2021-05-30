import React from 'react';
import './TodoList.scss';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li className="list" key={todo.id}>
        <Todo {...todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

TodoList.defaultProps = {
  todos: [],
};
