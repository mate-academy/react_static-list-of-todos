import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <>
    <td>{name}</td>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
