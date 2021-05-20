import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => {
  return (
   <p>{name}</p>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
};
