import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

function User({ name }) {
  return (
    <span className="user">
      {`By ${name}`}
    </span>
  );
}

export default User;

User.propTypes = {
  name: PropTypes.string.isRequired,
};
