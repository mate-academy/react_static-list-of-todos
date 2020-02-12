import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

const User = ({ info }) => (
  <span className="person">{info.name}</span>
);

User.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
