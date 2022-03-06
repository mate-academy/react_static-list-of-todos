import React from 'react';

interface User {
  name: string;
  email: string;
}

const UserInfo: React.FC<User> = ({ name, email }) => (
  <>
    <div className="todo__user-name">{`Name: ${name}`}</div>
    <div className="todo__user-email">{`Email: ${email}`}</div>
  </>
);

export default UserInfo;
