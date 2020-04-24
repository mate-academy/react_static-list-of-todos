import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

const User = ({ user: { name } }) => (
  <h2 className="todo__username">
    {name}
  </h2>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
