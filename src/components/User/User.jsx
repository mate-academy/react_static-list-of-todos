import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

const User = ({ name }) => (
  <div className="user-name">
    {name}
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
