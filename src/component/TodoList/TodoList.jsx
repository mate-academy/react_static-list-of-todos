import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';

export const TodoList = ({ todo }) => (
  <ul>
    {todo.map(everyUser => (
      <li key={everyUser.id}>
        <Todo {...everyUser} />
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
