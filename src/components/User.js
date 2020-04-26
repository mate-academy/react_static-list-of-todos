import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name }) => (
  <p><b>{name}</b></p>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
