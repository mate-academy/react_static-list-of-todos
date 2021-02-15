import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <td className="userName">
    Name:
    {' '}
    {name}
  </td>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
