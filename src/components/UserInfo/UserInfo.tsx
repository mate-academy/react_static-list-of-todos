import React from 'react';
import { User } from '../Type/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;

  return (
    <>
      {user && (
        <div className="list_item">
          {user.username}
        </div>
      )}

      {user && (
        <div className="list_item">
          {user.name}
        </div>
      )}

      {user && (
        <div className="list_item">
          {user.email}
        </div>
      )}
    </>
  );
};
