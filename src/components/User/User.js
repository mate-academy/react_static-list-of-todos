import React from 'react';
import PropTypes from 'prop-types';

import './User.css';

const User = ({ user }) => (
  <>
    <span className="todo-list__item-user">{user.name}</span>
  </>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default User;
