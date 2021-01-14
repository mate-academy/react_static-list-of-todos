import React from 'react';
import { UserTypes } from '../types';

function User({ user }) {
  return (
    <p>{`Name: ${user.name}`}</p>
  );
}

User.propTypes = {
  user: UserTypes.isRequired,
};

export default User;
