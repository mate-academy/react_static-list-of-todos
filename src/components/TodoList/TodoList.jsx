import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import './TodoList.scss';

export const TodoList = ({ todosArr }) => (
  <ul className="todo__list">
    {todosArr.map(task => (
      <li className="todo__list-item" key={task.id}>
        <Todo {...task} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todosArr: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
