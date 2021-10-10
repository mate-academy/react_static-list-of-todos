import React from 'react';

type Props = {
  user: {
    name: string;
    email: string;
  }
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user: { name, email } } = props;

  return (
    <span className="user">
      <span className="userName">
        {name}
      </span>
      <span className="userEmail">
        {email}
      </span>
    </span>
  );
};
