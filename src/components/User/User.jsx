import React from 'react';
import PropTypes from 'prop-types';
import { UserTypes } from '../../types';
import './User.scss';

export const User = ({ user }) => (
  <>
    <p className="name">
      {user.name}
    </p>
  </>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    UserTypes,
  }),
};

User.defaultProps = {
  user: null,
};
