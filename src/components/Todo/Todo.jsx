import React from 'react';
import './todo.scss';
import PropTypes from 'prop-types';
import User from '../User';

function Todo({ title, completed, user }) {
  return (
    <>
      <h3>{title}</h3>
      <p className={`load ${completed ? 'load--completed' : ''}`}>
        {(completed)
          ? 'Completed'
          : 'Not complete yet'}
      </p>
      <User {...user} />
    </>
  );
}

export default Todo;

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
