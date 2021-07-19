import React from 'react';

import PropTypes from 'prop-types';
import './Todo.css';

export default function Todo({ todo }) {
  return (
    <>
      <td>
        {todo.id}
      </td>
      <td>
        {`${todo.title}`.toUpperCase()}
      </td>
      <td className={!todo.completed && 'not-completed'}>
        {todo.completed ? 'Completed' : 'Not compleated yet!'}
      </td>
    </>
  );
}

Todo.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
