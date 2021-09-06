import React from 'react';
import './UseInfo.scss';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;
  const { name, email } = user;

  return (
    <p className="userInfo">
      <span className="userName">
        {name}
      </span>
      <span className="userEmail">
        {email}
      </span>
    </p>
  );
};
