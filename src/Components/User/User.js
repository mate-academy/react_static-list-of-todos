import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

const UserComponent = ({ user }) => {
  const {
    username, name, phone, website, email,
  } = user;

  return (
    <div className="user">
      <p className="user__username">
        {username}
      </p>
      <p className="user__name">
        {name}
      </p>
      <p className="user__email">
        {email}
      </p>
      <p className="user__detais">
        {phone}
        <br />
        {website}
      </p>
    </div>
  );
};

UserComponent.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
};

export default UserComponent;
