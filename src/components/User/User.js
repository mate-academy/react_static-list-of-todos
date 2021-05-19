import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <p className="App__name">
    {name}
  </p>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
