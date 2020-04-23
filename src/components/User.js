import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name }) => (
  <p className="todo__user-name">
    {name}
  </p>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
