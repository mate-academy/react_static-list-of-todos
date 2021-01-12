import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';

import './TodoList.scss';

export const TodoList = ({ listOfTodos }) => (
  <ul className="todo-list">
    {listOfTodos.map(todoOfUser => (
      <li
        key={todoOfUser.id}
        className="todo-list__item"
      >
        <Todo {...todoOfUser} />
      </li>
    ))}
  </ul>
);
TodoList.propTypes = {
  listOfTodos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
