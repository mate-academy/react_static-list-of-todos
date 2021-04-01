import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import './todoList.scss';

export const TodoList = ({ preparedTodos }) => (
  <ul className="todo-list">
    {preparedTodos.map(item => (
      <li className="todo-list__item" key={item.id}>
        <Todo {...item} />
      </li>
    ))};
  </ul>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
