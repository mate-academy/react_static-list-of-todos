import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <td className="user_name">{name}</td>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
