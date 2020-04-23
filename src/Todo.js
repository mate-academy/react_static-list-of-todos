import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

function Todo({ todo: { user, title, completed } }) {
  return (
    <>
      <User user={user} />
      { completed
        ? <p className="completed__todo status">Is Done</p>
        : <p className="not-completed__todo status">Is not Done</p>
      }
      <p className="completed__title">{title}</p>
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
