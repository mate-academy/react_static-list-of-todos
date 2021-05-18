import React from 'react';
import PropTypes from 'prop-types';

import { User } from './User';

export function Todo({ title, completed, user }) {
  return (
    <>
      <h2 className="todo-list__title">{title}</h2>
      <User {...user} />
      <p className="todo-list__status">{`${completed}`}</p>
    </>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  completed: PropTypes.bool,
};

Todo.defaultProps = {
  completed: false,
};
