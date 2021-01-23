import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <h3 className="todo-list__item-user">
    User name:
    {name}
  </h3>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
