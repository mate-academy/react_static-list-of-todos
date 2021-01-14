import React from 'react';
import PropTypes from 'prop-types';
import { TodoTypes } from '../../types';

export const User = ({ user }) => (
  <>
    {user.name}
  </>
);

User.propTypes = {
  user: PropTypes.shape(TodoTypes.user).isRequired,
};
