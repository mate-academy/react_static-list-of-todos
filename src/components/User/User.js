import React from 'react';
import propTypes from 'prop-types';

export const User = ({ name }) => (
  <p>{name}</p>
);

User.propTypes = {
  name: propTypes.string.isRequired,
};
