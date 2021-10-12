import React from 'react';
import './UserInfo.scss';

type Props = {
  name: string;
  email: string;
};
export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <>
    <div className="listItem">{name}</div>
    <div className="listItem">{email}</div>
  </>
);
