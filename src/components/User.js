import React from 'react';
import PropTypes from 'prop-types';
import './users.scss';

function User({ name }) {
  return (
    <span className="userName">
      {name}
      {' '}
    </span>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
