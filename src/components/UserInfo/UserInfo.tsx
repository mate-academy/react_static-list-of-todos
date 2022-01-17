import React from 'react';

type UserProps = {
  user: User | null,
};

export const UserInfo: React.FC<UserProps> = ({ user }) => (
  <>
    <p className="todo_name">{user?.name}</p>
    <p className="">{`Email: ${user?.email}`}</p>
  </>
);
