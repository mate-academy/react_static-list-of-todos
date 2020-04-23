import React from 'react';
import PropTypes from 'prop-types';

import User from '../User/User';

const Todo = ({ title, completed, performer }) => (
  <>
    <h2>{title}</h2>
    <p>
      completed:
      <b>{completed ? 'Yes' : 'No'}</b>
    </p>
    <p>
      performer:
      <User {...performer} />
    </p>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  performer: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Todo;
