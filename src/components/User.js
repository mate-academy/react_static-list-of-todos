import React from 'react';
// import './App.css';
import PropTypes from 'prop-types';

const User = ({ name }) => <b>{name}</b>;

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
