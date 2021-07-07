import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <p className="user">
    <i>{name}</i>
  </p>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
