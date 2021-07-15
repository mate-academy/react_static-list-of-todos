import React from 'react';
import PropTypes from 'prop-types';

export const Todo = ({ title, completed }) => (
  <>
    <h3>{title.toUpperCase()}</h3>
    <p>
      {`Status: `}
      {completed ? 'Completed' : 'Not compleated yet!'}
    </p>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
