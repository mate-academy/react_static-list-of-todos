import React from 'react';
import { User } from '../../types';

type Prop = {
  user: User,
};

export const UserInfo: React.FC<Prop> = ({ user }) => (
  <div>
    <p>
      {`Name: ${user.name}`}
    </p>
    <p>
      {`Email: ${user.email}`}
    </p>
  </div>
);
