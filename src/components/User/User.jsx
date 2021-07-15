import React from 'react';
import propTypes from 'prop-types';

export const User = ({ userName }) => (
  <p>
    {`User name: ${userName}`}
  </p>
);

User.propTypes = {
  userName: propTypes.string.isRequired,
};
