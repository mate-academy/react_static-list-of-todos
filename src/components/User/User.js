import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => <td className="box__cell">{user.name}</td>;

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
