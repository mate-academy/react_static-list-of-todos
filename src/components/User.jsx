import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, phone }) => (
  <div className="user">
    <h3>{name}</h3>
    <p>{email}</p>
    <p>{phone}</p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
