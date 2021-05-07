import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name, phone, email }) => (
  <>
    <div className="user__name">{name}</div>
    <div className="user__phone">{phone}</div>
    <div className="user__email">{email}</div>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
