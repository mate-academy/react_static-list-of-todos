import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';

export const TodoList = ({ todoVariable }) => (
  <ul>
    {todoVariable.map(todo => (
      <li className="list-group-item">
        <Todo todoVar={todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todoVariable: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    }),
  ).isRequired,
};
