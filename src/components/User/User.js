import React from 'react';
import PropTypes from 'prop-types';

export function User({ name }) {
  return (
    <td>{name}</td>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};
