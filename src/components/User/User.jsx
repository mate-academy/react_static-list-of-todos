import React from 'react';
import PropTypes from 'prop-types';
import { UserType } from '../../types';
import './User.scss';

export const User = ({ user }) => (
  <>
    <p className="name">
      {user.name}
    </p>
  </>
);

User.propTypes = {
  user: PropTypes.shape(UserType),
};

User.defaultProps = {
  user: null,
};
