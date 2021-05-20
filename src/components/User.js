import React from 'react';
import PropTypes from 'prop-types';

function User({ name }) {
  return (
    <span className="user">
      User:
      {' '}
      {name}
    </span>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
