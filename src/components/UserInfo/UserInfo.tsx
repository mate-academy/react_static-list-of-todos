import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User | null
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  user
    ? (
      <p className="task__info">
        <h3>
          { user.name }
        </h3>

        <a href={`mailto:${user.email}`}>
          {user.email}
        </a>
      </p>
    )
    : (
      <h3>
        Anonymous
      </h3>
    )
);
