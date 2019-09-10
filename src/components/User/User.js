import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <>
    <div className="header">{user.name}</div>
    <div className="item meta">
      <i className="mail icon" />
      <a href={`mailto:${user.email}`} className="content">{user.email}</a>
    </div>
  </>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
};

export default User;
