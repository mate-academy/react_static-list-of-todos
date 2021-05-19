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
  completed: PropTypes.bool.isRequired,
  // eslint-disable-next-line
  user: PropTypes.object.isRequired,
};
