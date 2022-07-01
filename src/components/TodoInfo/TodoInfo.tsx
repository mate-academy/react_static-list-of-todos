import React from 'react';

import './TodoInfo.scss';

import { UserInfo } from '../UserInfo';

import User from '../../types/User';

type Props = {
  title: string;
  completed: boolean;
  user: User | null;
};

export const TodoInfo: React.FC<Props> = ({ title, completed, user }) => (
  <div className={completed
    ? 'TodoInfo TodoInfo--done'
    : 'TodoInfo'}
  >
    <h2 className="TodoInfo__title" data-cy="title">{`${title}`}</h2>
    <span>
      {'Status: '}
      <span
        className={completed
          ? 'TodoInfo__status TodoInfo__status--done'
          : 'TodoInfo__status'}
        data-cy="status"
      >
        {`${completed ? '' : 'Not'} completed!`}
      </span>
    </span>

    <hr className="TodoInfo__line" />

    {user !== null
      ? (
        <UserInfo
          name={user?.name}
          username={user?.username}
          email={user?.email}
        />
      )
      : (
        <div>User does not exist</div>
      )}
  </div>
);
