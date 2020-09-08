import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <>
    <h2>User:</h2>
    <em>{name}</em>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
