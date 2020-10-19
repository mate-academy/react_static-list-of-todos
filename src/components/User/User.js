import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <div className="user-name mb-1">
    {name}
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
