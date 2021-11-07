import React from 'react';
import { User } from '../../types/types';

export const UserInfo: React.FC<User> = ({
  name,
  username,
  email,
  phone,
}) => (
  <>
    <div className="App__list_names">
      <span className="App__list_username">{`${username}`}</span>
      <span>{`${name}`}</span>
    </div>
    <div className="App__list_contacts">
      <a href={`mailto:${email}`} className="App__list_email">{`${email}`}</a>
      <a href={`tel:${phone.slice(0, 14)}`} className="App__list_phone">{`${phone}`}</a>
    </div>
  </>
);
