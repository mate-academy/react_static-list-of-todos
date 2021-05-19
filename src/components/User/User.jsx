import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <h1>{name}</h1>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
