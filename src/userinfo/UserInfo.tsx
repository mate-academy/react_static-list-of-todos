import React from 'react';
import './UserInfo.scss';

type User = {
  name: string;
  email: string;
};

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <>
    <span className="info">
      {`Name: ${name}`}
      {`Email: ${email}`}
    </span>
  </>
);
