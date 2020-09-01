import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const Todo = todo => (
  <>
    <User {...todo.user} />
    <p>{todo.title}</p>
    <p>{todo.completed === true ? 'completed' : 'uncompleted'}</p>
  </>
);

Todo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;
