import React from 'react';
import PropTypes from 'prop-types';

const User = ({ userObj }) => (
  <td>{userObj.name}</td>
);

User.propTypes = {
  userObj: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
