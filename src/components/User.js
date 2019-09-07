import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  return (
    <div>
      <h2>
        UserName:
        {user.username}
      </h2>
      <p>
        Name:
        {user.name}
      </p>
      <p>
        Email:
        {user.email}
      </p>
      <p>
        From:
        {user.address.city}
      </p>
      <p>
        Webiste:
        {user.website}
      </p>
    </div>
  );
}
User.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }).isRequired,
    website: PropTypes.string.isRequired,
  }).isRequired,
};
export default User;
