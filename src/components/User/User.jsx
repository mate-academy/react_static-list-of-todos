import React from 'react';

import PropTypes from 'prop-types';
import { UserType } from '../../types';

import './User.scss';

const User = ({ user }) => (
  <span className="user-name">
    {user.name}
  </span>
);

User.propTypes = {
  user: PropTypes.shape(UserType),
};

User.defaultProps = {
  user: null,
};

export default User;
