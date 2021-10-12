import React from 'react';
import { User } from '../types/User';

export const UserInfo: React.FC<{ todoUser: User }> = ({ todoUser }) => (
  <>
    <h2>
      {`Name: ${todoUser.name}`}
    </h2>
    <h3>
      email:
      {todoUser.email}
    </h3>
  </>
);
