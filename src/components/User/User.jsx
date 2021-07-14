import React from 'react';
import PropTypes from 'prop-types';
import './User.scss'

const User = ({ name }) => (
  <p className="user-name">{name}</p>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
