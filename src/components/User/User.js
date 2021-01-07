import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <>
    <strong>Name:</strong>
    {' '}
    <em>{name}</em>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
