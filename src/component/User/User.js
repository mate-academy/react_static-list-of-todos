import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export function User({ userInfo }) {
  return (
    <p className="user">
      {userInfo.name}
    </p>
  );
}

User.propTypes = {
  userInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
