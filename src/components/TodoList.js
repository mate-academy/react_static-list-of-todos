import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';

export const TodoList = ({ prepared }) => (
  <tbody>
    {prepared.map(todo => (
      <tr key={todo.id}>
        <Todo {...todo} />
      </tr>
    ))}
  </tbody>
);

TodoList.defaultProps = {
  prepared: [],
};

TodoList.propTypes = {
  prepared: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool,
      user: PropTypes.string.isRequired,
    }),
  ),
};
