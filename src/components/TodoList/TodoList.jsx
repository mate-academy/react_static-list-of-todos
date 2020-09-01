import React from 'react';
import './todolist.scss';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';

export const TodoList = ({ todoss }) => (
  <div className="todoList">
    <ul>
      {todoss.map(todo => (
        <li key={todo.id}>
          <Todo {...todo} />
        </li>
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  todoss: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
