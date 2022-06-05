import React from 'react';
import classNames from 'classnames';
import './TodoInfo.scss';
import { UserInfo } from '../UserInfo';
import { User } from '../../types/User';

type Props = {
  title: string;
  completed: boolean;
  user: User | null;
};

export const TodoInfo: React.FC<Props> = ({ title, completed, user }) => (
  <>
    <p>{title}</p>
    <p
      className={classNames(
        'todoStatus',
        {
          completed,
        },
      )}
    >
      {`Completed: ${completed}`}
    </p>

    {user && (
      <UserInfo {...user} />
    )}
  </>
);
