import React from 'react';
import PropTypes from 'prop-types';
import './user.scss';

function User({ name }) {
  return (
    <p className="username">
      {name}
    </p>
  );
}

export default User;

User.propTypes = {
  name: PropTypes.string.isRequired,
};
