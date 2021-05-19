import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name }) => (
  <span className="User">
    User:
    <span className="User__name">
      {` ${name}`}
    </span>
  </span>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
