import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <span className="item__name">{name}</span>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
