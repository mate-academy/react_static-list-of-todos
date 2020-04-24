import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ userInfo }) => (
  <p>
    <b>For</b>: {userInfo.name}
  </p>
);

User.propTypes = {
  userInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
