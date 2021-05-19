import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import './TodoList.scss';

export const TodoList = ({ todosArr }) => (
  <ul className="todoList">
    {todosArr.map(task => (
      <li className="listItem" key={task.id}>
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
