import React from 'react';
import PropTypes from 'prop-types';

function User(props) {
  return <div>{props.user.name}</div>;
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default User;
