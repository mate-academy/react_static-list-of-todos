import React from 'react';
import PropTypes from 'prop-types';

const User = ({ todo }) => (
  <p>
    {todo.name}
  </p>
);

User.propTypes = {
  todo: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default User;
