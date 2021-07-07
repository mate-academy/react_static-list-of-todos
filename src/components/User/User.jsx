import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <div>{name}</div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
