import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <span>
    {name}
  </span>
);

User.propTypes = PropTypes.string.isRequired;
