import React from 'react';

import PropTypes from 'prop-types';
import './Todo.css';

export default function Todo({ id, title, completed }) {
  return (
    <>
      <td>
        {id}
      </td>
      <td>
        {title.toUpperCase()}
      </td>
      <td className={!completed && 'not-completed'}>
        {completed ? 'Completed' : 'Not compleated yet!'}
      </td>
    </>
  );
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
