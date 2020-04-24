import React from 'react';
import PropTypes from 'prop-types';

function User({ name, username, email }) {
  return (
    <>
      <div className="item__name">
        {name}
      </div>
      <div className="item__username">
        {username}
      </div>
      <div className="item__email">
        email:
        {' '}
        {email}
      </div>
    </>
  );
}

export default User;

User.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
