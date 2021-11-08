import React from 'react';
import classNames from 'classnames';
import './TodoInfo.scss';
import UserInfo from '../UserInfo';
import { User } from '../../typedefs';

interface Props {
  title: string;
  completed: boolean,
  user: User | null,
};

export const TodoInfo: React.FC<Props> = ({ title, completed, user }) => {
  return (
    <li className="list__item">
      <div>
        Task:&nbsp;
        {title}
      </div>
      <div>
        Status:&nbsp;
        <span className={classNames('status-color', {
          green: completed,
        })}
        >
          {completed
            ? 'completed'
            : 'in progress...'}
        </span>
      </div>
      {user
        ? (
          <UserInfo
            name={user.name}
            email={user.email}
          />
        )
        : null}
    </li>
  );
};
