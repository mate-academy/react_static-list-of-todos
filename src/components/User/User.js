import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <span>
    <i>{name}</i>
  </span>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
