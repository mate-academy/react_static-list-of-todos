import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

function Todo({ todo: { user, title, completed } }) {
  return (
    <>
      <div className={completed
        ? 'todo todo__completed'
        : 'todo'}
      >
        <p><User user={user} /></p>
        <p>
          <b>Todo:</b>
          {' '}
          {title}
        </p>
      </div>
    </>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    user: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool,
  }).isRequired,
};

export default Todo;
