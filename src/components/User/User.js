import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ userObject: { name } }) => (
  <td>{name}</td>
);

User.propTypes = {
  userObject: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
