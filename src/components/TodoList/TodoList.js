import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ todoProps }) => (
  <ul className="todo-list">
    {todoProps.map(todoItem => (
      <li key={todoItem.id} className="todo-list__item">
        <Todo {...todoItem} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todoProps: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
