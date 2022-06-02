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
    <>
      <h2 className="list__item-username">
        Name:
        {' '}
        {name}
      </h2>
      <h3 className="list__item-email">
        Email:
        {' '}
        {email}
      </h3>
    </>
  );
};
