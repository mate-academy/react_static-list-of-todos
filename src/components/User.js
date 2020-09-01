import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <h4 className="user">
    {name}
  </h4>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
