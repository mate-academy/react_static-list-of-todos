import React from 'react';
import { UserType } from '../types';

function User({ user }) {
  return (
    <span>
      {user.name}
    </span>
  );
}

User.propTypes = {
  user: UserType.isRequired,
};

export default User;
