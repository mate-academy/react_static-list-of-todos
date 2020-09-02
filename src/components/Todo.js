import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

function Todo({
  title,
  completed,
  user,
}) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{completed ? 'DONE' : 'IN PROGRESS'}</p>
      <User {...user} />
    </div>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default Todo;
