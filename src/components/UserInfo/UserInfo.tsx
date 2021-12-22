import React from 'react';
import { User } from '../../types/User';

type Props = {
  user?: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    {user && (
      <>
        <h3>{`Name: ${user.name}`}</h3>
        <p>
          Email:
          {' '}
          <a href={`mailto:${user.email}`}>
            {user.email}
          </a>
        </p>
      </>
    )}
  </>
);

UserInfo.defaultProps = {
  user: null,
};
