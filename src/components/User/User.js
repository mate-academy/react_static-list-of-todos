import React from 'react';
import propTypes from 'prop-types';

import './User.scss';

export const User = ({ name }) => (
  <span className="user-name">{name}</span>
);

User.propTypes = {
  name: propTypes.string.isRequired,
};
