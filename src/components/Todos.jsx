import React from 'react';
import propTypes from 'prop-types';

import User from './User'

function Todo({ title, completed, user }) {
  return (
  <>
    <h3>Title: {title}</h3>
    <p>State: <i>{completed ? 'Done' : 'Not done'}</i></p>
    <User {...user}/>
  </>
  );
};


Todo.propTypes = {
  title: propTypes.string.isRequired,
  completed: propTypes.string.isRequired,
  user: propTypes.shape({
    id: propTypes.string.isRequired,
  }).isRequired,
};

export default Todo;
