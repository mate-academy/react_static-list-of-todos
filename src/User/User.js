import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
  const { userObj } = props;

  return (
    <td>{userObj.name}</td>
  );
};

User.propTypes = {
  userObj: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
