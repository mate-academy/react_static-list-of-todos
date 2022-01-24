import React from 'react';
import { User } from '../../types/User';

export const UserInfo: React.FC<User> = ({
  name,
  username,
  email,
  phone,
  address,
  company,
}) => (
  <div>
    <h2>{name + username}</h2>
    <a href={`mailto:${email}`}>{email}</a>
    <p>
      {'phone: '}
      {phone}
    </p>
    <p>
      {'address.geo.lat: '}
      {address.geo.lat}
    </p>
    <p>
      {'company.catchPhrase: '}
      {company.catchPhrase}
    </p>
  </div>
);
