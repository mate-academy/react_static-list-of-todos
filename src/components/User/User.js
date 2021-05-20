import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <p className="UserName">
    {name}
  </p>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
