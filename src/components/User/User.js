import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

const User = props => (
  <small className="todo__user">{props.name}</small>
);

export { User };

User.propTypes = {
  name: PropTypes.string.isRequired,
};
