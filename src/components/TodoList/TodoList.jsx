import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import './todoList.scss';

export const TodoList = ({ preparedTodos }) => (
  <ul className="toDosList">
    {preparedTodos.map(listItem => (
      <li className="toDosList__item" key={listItem.id}>
        <Todo {...listItem} />
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
