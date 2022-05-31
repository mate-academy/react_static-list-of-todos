import React from 'react';

type User = {
  name: string,
  email: string
};

export const UserInfo: React.FC <User> = ({
  name,
  email,
}) => {
  return (
    <div>
      <h2>
        User name is
        {' '}
        {name}
      </h2>
      <p>
        Email is
        {email}
      </p>
    </div>
  );
};
