import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, username, email }) => (
  <div className="item__info--user">
    <p>
      Name:
      {' '}
      {name}
    </p>
    <p>
      Username:
      {' '}
      {username}
    </p>
    <p>
      Email:
      {' '}
      {email}
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
