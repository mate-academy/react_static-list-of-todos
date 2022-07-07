import React from 'react';
import { User } from '../../type/User';
import './UserInfo.scss';

type Props = {
  completed: boolean;
  user: User | null
};

const UserInfo: React.FC <Props> = ({ user, completed }) => (
  <>
    <div className="media">
      <div className="media-content">
        <p
          className={`${completed
            ? 'title is-4 indicator indicator--true'
            : 'title is-4  indicator indicator--false'}`}
          data-cy="username"
        >
          {user?.name}

        </p>
        <p className="subtitle is-6">{user?.username}</p>
        <a
          href="mailto:"
          className="subtitle is-6"
          data-cy="email"
        >
          {user?.email}

        </a>
      </div>
    </div>
  </>
);

export default UserInfo;
