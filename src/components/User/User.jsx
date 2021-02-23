import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <div className="name">
    {name}
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
