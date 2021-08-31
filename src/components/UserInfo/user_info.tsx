import React from 'react';
import { User } from '../Type/User';

// import '../../App.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <>
      <div className="list_item">
        {user ? user.username : null}
      </div>
      <div className="list_item">
        {user ? user.name : null}
      </div>
      <div className="list_item">
        {user ? user.email : null}
      </div>
    </>
  );
};
