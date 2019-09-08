/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

function User({ user }) {
  return (
    <div className="user">
      <p className="user__text">
        { user.name }
      </p>

      <p>
        <a className="user__text" href="#">{ user.username }</a>
      </p>

      <p>
        <a className="user__text" href="mailto:">{ user.email }</a>
      </p>

      <p>
        <a className="user__text" href="tel:">{ user.phone }</a>
      </p>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
};

export default User;
