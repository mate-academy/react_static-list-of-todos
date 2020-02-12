import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User/User';

export const Todo = ({ name, status, user }) => (
  <User user={user} status={status} name={name} />
);

Todo.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
