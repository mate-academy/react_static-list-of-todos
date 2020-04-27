import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

function Todo({ todo: { title, completed, user } }) {
  return (
    <>
      <li className="todo__item">
        <p className="todo__title">
          {title}
        </p>

        {completed
          ? <p className="todo__completed">Done</p>
          : <p className="todo__completed--not">Not done</p>}

        <User user={user} />
      </li>
    </>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  }).isRequired,
};

export default Todo;
