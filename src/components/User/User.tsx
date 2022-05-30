import React from 'react';

interface PropUser {
  user: User | null
}

export const User: React.FC<PropUser> = ({ user }) => (
  <span>
    {user ? <em>{`My address is : ${user.address.city}, ${user.address.street} , ${user.address.suite}`}</em> : null}
  </span>
);
