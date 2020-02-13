import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User/User';

export const Todo = ({ id, completed, user, title }) => (
  <User
    user={user}
    status={completed}
    title={title}
    id={id}
  />
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
