import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name }) => (
  <div className="users__name">
    {name}
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
