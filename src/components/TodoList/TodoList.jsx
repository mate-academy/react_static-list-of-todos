import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss';
import { Todo } from '../Todo';

export const TodoList = ({ todoList }) => (
  <ul className="todo-list">

    {todoList.map(todItem => (
      <li className="todo-li" key={todItem.id}>
        <Todo {...todItem} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
