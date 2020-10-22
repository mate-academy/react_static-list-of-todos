import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name }) => (
  <p className="users__name">
    {name}
  </p>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
