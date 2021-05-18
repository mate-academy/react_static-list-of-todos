import React from 'react';
import propTypes from 'prop-types';
import User from '../User';
import './Todo.scss';

const Todo = ({ title, completed, user }) => (
  <>
    <h1 className="tile">
      {title}
    </h1>
    <p className={completed ? 'green' : 'red'}>
      {String(completed)}
    </p>
    <User {...user} />
  </>
);

Todo.propTypes = {
  title: propTypes.string.isRequired,
  completed: propTypes.bool.isRequired,
  user: propTypes.shape({
    name: propTypes.string.isRequired,
  }).isRequired,
};

export default Todo;
