import React from 'react';
import PropTypes from 'prop-types';
import './Todo.css';
import User from './User';

function Todo({ user }) {
  return (
    <>
      <span className={user.completed ? 'done' : 'didNotDone'}>
        {user.completed ? 'COMPLETE ' : 'DID NOT COMPLETE '}
      </span>

      <span>
        {user.title}
      </span>

      <User person={user.person} />
    </>
  );
}

Todo.propTypes = {
  user: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    person: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Todo;
