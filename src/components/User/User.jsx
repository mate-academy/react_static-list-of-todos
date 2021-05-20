import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name }) => (
  <strong className="name">{name}</strong>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
