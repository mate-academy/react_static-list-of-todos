import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

export const User = ({ userName }) => (
  <td className="todo-td">{userName}</td>
);

User.propTypes = {
  userName: PropTypes.string,
};

User.defaultProps = {
  userName: PropTypes.string,
};
