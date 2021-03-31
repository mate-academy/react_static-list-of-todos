import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <h2>
    {name}
  </h2>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
