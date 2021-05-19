import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name }) => (
  <p className="userName">
    <span className="userNamePrefix">Task for: </span>{name}
  </p>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
