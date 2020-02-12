import React from 'react';
import PropTypes from 'prop-types';

export function User(props) {
  const { name } = props;

  return (
    <td>{name}</td>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};
