import React from 'react';
import PropTypes from 'prop-types';

const User = props => (
  <p>{props.name.toUpperCase()}</p>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
