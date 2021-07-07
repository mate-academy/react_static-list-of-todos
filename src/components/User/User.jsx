import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name }) => (
  <>
    <span className="todo__prefix">User name: </span>
    {name}
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
