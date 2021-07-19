import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name }) => (
  <p>
    {`Name: `}
    <i><strong>{name}</strong></i>
  </p>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
