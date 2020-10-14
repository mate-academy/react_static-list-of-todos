import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import './TodoList.scss';

export const TodoList = ({ list }) => (
  <ul className="todo-list">
    {list.map(todo => (
      <li>
        <Todo {...todo} key={todo.id} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
};
