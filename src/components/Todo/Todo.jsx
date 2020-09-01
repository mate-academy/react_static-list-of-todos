import React from 'react';
import PropTypes from 'prop-types';

export const Todo = ({ title, completed }) => (
  <>
    <div>{title}</div>
    <div>{completed ? 'done' : 'in process'}</div>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
