import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

const User = ({ name }) => (
  <div className="todo_user">{name}</div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
