import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const User = ({ user }) => (
  <>
    <span className="user">{user.name}</span>
  </>
);

User.defaultProps = {
  user: {},
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
};
