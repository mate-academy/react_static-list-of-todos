import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <span>
    {name.toUpperCase()}
  </span>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
