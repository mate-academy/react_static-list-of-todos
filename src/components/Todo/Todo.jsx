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
  user: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  completed: PropTypes.bool,
};

Todo.defaultProps = {
  completed: false,
};
