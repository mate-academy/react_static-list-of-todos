import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ users }) => (
  <>
    {users.map(user => (
      <div key={user.id}>
        {user.name}
      </div>
    ))}
  </>
);

User.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
