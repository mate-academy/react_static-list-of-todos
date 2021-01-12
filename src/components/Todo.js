import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ title, completed }) => (
  <>
    <h2>{title}</h2>
    <p>
      <b>Completed:</b>
      {completed ? 'No' : 'Yes'}
    </p>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;
