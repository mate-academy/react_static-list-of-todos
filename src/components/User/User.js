import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name }) => (
  <>
    {name}
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
