import React from 'react';
import { User } from '../../types/types';

type Prop = {
  user: User,
};

export const UserInfo: React.FC<Prop> = (props) => {
  const { user } = props;

  return (
    <div>
      <p>
        {`Name: ${user.name}`}
      </p>
      <p>
        {`Email: ${user.email}`}
      </p>
    </div>

  );
};
