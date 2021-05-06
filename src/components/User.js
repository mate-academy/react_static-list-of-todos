import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <span className="todo-user">{ name }</span>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
