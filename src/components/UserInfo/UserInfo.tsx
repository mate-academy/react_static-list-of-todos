import React from 'react';
import './UserInfo.scss';

type Props = {
  name: string;
  email: string;
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <div className="card-footer-item user__info">
    <div>{`Name: ${name}`}</div>
    <div>{`Email: ${email}`}</div>
  </div>
);
