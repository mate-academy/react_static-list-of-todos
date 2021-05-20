import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from '../Todo';
import './TodoList.scss';

export const TodoList = ({ todos }) => (
  <ul className="todoList">
    {todos.map(todo => (
      <li className="todoList__item" key={todo.id}>
        <Todo {...todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

// TodoList.defaultProps = {
//   todos: [],
// };
