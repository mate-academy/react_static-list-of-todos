import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

function Todo({ todo: { user, title, completed } }) {
  return (
    <>
      <User user={user} />
      <p className="todo__complete">{completed ? 'Done' : 'Not ready'}</p>
      <p className="todo__title">
        {title}
      </p>
    </>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    user: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Todo;
