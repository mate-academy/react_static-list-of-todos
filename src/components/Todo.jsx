import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

let result = 'false';

export const Todo = (element) => {
  if (element.completed) {
    result = 'true';
  }

  return (
    <div className="todo">
      <h2>{element.title}</h2>
      <p>Status: {result}</p>
      <User {...element.user} />
    </div>
  );
};

Todo.propTypes = {
  element: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.shape({}),
  }),
};
