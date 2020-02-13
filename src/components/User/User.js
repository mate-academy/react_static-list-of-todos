import React from 'react';
import PropTypes from 'prop-types';

export const User = (props) => {
  const { user: { name } } = props;

  return (
    <td>{name}</td>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
