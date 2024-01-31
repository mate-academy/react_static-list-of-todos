// Add the required types and props
import React from 'react';
import usersFromServer from '../../api/users';

export const UserInfo: React.FC<{ userId: number }> = ({ userId }) => {
  const user = usersFromServer.find((person) => person.id === userId);

  return (
    <a className="UserInfo" href={user?.email}>
      {user?.name}
    </a>
  );
};
