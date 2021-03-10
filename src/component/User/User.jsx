import React from 'react';
import PropTypes from 'prop-types';
import { UserType } from '../../UserType';

export const User = ({ user }) => (
  <>
    {user.name}
  </>
);

User.propTypes = {
  user: PropTypes.shape(UserType),
};

User.defaultProps = {
  user: null,
};
