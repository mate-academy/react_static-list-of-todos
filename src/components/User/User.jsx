import React from 'react';
import PropTypes from 'prop-types';
import './user.scss';

export const User = ({ user }) => (
  <div className="toDosList__item-person">{user.name}</div>
);

User.propTypes = {
  user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
};
