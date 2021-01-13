import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({ name }) => (
  <p className="user-name">
    <span><strong>{name}</strong></span>
  </p>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
