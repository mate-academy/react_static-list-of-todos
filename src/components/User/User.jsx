import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ user }) => (
  <>
    <div className="user__name">{user.name}</div>
    <div className="user__phone">{user.phone}</div>
    <div className="user__email">{user.email}</div>
  </>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

// User.defaultProps = {
//   user: PropTypes.shape({
//     email: '<< No contain email >>',
//   }),
// };
