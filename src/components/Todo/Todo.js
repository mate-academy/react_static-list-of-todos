import React from 'react';
import PropTypes from 'prop-types';
import User from '../User';
import './Todo.scss';

const Todo = ({ title, completed, user }) => (
  <>
    <h1 className="title">
      {title}
    </h1>
    <p className={completed ? 'completed' : 'in-progress'}>
      {completed ? '✓' : '✗'}
    </p>
    <User {...user} />
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Todo;
