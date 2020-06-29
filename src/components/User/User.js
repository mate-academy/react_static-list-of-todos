import React from 'react';
import PropTypes from 'prop-types';

import './User.css';

const User = ({ user }) => (
  <span className="App__name">
    {`Name: ${user.name}`}
  </span>
);

export default User;

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.object.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    company: PropTypes.object.isRequired,
  }).isRequired,
};
