import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

const User = ({ user }) => (
  <span className="user-name">
    {user.name}
  </span>
);

User.propTypes = {
  user: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
};

User.defaultProps = {
  user: {},
};

export default User;
