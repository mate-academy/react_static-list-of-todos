import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';

function Todo({ todo: { title, user, completed } }) {
  return (
    <>
      <User user={user} />
      {
        completed
          ? <p className="item__completion_true">Done</p>
          : <p className="item__completion_false">Not yet</p>
      }
      <p className="item__title">
        {title}
      </p>
    </>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Todo;
