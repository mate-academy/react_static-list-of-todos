import React from 'react';
import PropTypes from 'prop-types';

function User({
  name,
}) {
  return (
    <p className="username">{name}</p>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
