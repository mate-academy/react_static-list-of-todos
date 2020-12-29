import React from 'react';
import PropTypes from 'prop-types';

export function User({ name }) {
  return (
    <td className="list_name">{name}</td>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};
