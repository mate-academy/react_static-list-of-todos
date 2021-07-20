import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <p>
    {`User: ${name}`}
  </p>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
