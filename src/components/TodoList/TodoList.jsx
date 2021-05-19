import React from 'react';
import './TodoList.scss';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ todo }) => (
  <ul>
    {todo.map(event => (
      <li className="list" key={event.id}>
        <Todo {...event} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

TodoList.defaultProps = {
  todo: [],
};
