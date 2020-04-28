import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  return (<h4 className="user__name">{user.name}</h4>);
}

export default User;

User.propTypes = {
  user: PropTypes.string.isRequired,
};
