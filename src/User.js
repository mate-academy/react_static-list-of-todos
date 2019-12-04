import React from 'react';
import PropTypes from 'prop-types';

const User = ({ email, name }) => (
  <a href={`mailto:${email}`}>{name}</a>
);

User.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default User;
