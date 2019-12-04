import React from 'react';
import PropTypes from 'prop-types';

const Users = props => (
  <p className="user-name">
    Assigned to:
    {' '}
    {props.user.name}
  </p>
);

Users.propTypes = {
  user: PropTypes.shape(
    { name: PropTypes.string }
  ).isRequired,
};

export default Users;
