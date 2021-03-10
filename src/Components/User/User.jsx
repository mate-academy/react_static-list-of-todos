import React from 'react';
import { UserType } from '../UserType/UserType';

export function User({ user }) {
  return (
    <>
      <h3>{user.name}</h3>
    </>
  );
}

User.propTypes = {
  user: UserType,
};

User.defaultProps = {
  user: null,
};
