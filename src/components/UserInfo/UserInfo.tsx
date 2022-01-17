import React from 'react';
import './UserInfo.scss';

type Props = {
  name: string,
  email: string,
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <div className="shortInfoOfUser">
    <strong className="shortInfoOfUser__name">{name}</strong>
    <span
      className="shortInfoOfUser__email"
    >
      {email}
    </span>
  </div>
);
