import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/User';

type Props = {
  user: User | null,
};

const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;

  return (
    <div className="user">
      <p className="user__id">
        {user ? user.id : 'Anonymous dude id'}
      </p>
      <p className="user__name">
        {user ? user.name : 'Anonymous dude name'}
      </p>
      <p className="user__email">
        {user ? user.email : 'Anonymous email'}
      </p>
    </div>
  );
};

export default UserInfo;
