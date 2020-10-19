import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <div className="mb-1">
    <b>{name}</b>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
