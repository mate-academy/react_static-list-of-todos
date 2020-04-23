import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name }) => <b><em>{name}</em></b>;

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
