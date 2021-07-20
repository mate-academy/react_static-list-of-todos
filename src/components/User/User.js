import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <span className="is-italic">{name}</span>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
