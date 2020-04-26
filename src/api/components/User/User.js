import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

function User({ name, username }) {
  return (
    <>
      <p className="card__item-username">
        {name}
      </p>
      <p className="card__item-nickname">
        {username}
      </p>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default User;
