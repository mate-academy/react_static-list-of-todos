import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <th className="user__name">{name}</th>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
