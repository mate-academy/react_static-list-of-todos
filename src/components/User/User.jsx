import React from 'react';
import PropTypes from 'prop-types';
import './user.scss';

export const User = ({ name }) => (
  <span className="toDoList__person">
    {name}
  </span>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
