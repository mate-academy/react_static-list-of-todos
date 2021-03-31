import React from 'react';
import PropTypes from 'prop-types';
import './user.scss';

export const User = ({ name }) => (
  <strong className="user">
    {name}
  </strong>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
