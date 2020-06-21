import React from 'react';
import PropTypes from 'prop-types';

export const User = props => (
  <p>{props.user.name}</p>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
