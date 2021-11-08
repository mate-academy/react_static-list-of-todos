import React from 'react';
import { User } from '../../types/types';

interface Props {
  user: User;
}

export const UserInfo: React.FC<Props> = ({ user }) => {
  const {
    name,
    username,
    email,
    phone,
  } = user;
  const phoneNumber = phone.slice(0, 14);

  return (
    <>
      <div className="App__list_names">
        <span className="App__list_username">{username}</span>
        <span>{`${name}`}</span>
      </div>
      <div className="App__list_contacts">
        <a href={`mailto:${email}`} className="App__list_email">{`${email}`}</a>
        <a href={`tel:${phoneNumber}`} className="App__list_phone">{`${phone}`}</a>
      </div>
    </>
  );
};
