import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name }) => (
  <>
    <h3>{name}</h3>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
