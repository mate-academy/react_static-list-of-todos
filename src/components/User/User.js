import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

function User({ name, email }) {
  return (
    <>
      <span className="li-user">User</span>
      {` : ${name} (${email})`}
    </>
  );
}

export default User;

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
