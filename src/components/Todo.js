import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import './Todo.css';

const Todo = ({ title, completed, user }) => (
  <>
    <h2>
      {title}
    </h2>
    <p>
      Status:
      <b>{completed ? 'DONE' : 'PENDING'}</b>
    </p>
    <p className="userName">
      <User {...user} />
    </p>

  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Todo;
