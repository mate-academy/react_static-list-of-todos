import React from 'react';
import PropTypes from 'prop-types';

export const User = props => (
  <p>{props.name}</p>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
