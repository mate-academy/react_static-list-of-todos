import React from 'react';
import PropTypes from 'prop-types';

function User(props) {
  const { user } = props;

  return (
    <td>{user.name}</td>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default User;
