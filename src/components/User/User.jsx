import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <p className="User">
    User:
    <span className="User__name">
      {' '}
      {name}
    </span>
  </p>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
