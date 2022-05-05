import React from 'react';
import './TodoInfo.scss';
import { Users } from '../../types/User';
import { UserInfo } from '../UserInfo';

type Props = {
  title: string,
  completed: boolean,
  user: Users | null,
};

export const TodoInfo: React.FC<Props> = ({
  title,
  completed,
  user,
}) => (
  <>
    <p>
      <div>
        <span className="todo-info__title">Task: </span>
        {title}
      </div>
      <div>
        <span className="todo-info__title">Сompleted: </span>
        {completed ? 'Yes' : 'No'}
      </div>
    </p>
    {
      (user === null)
        ? 'No user data'
        : (
          <UserInfo user={user} />
        )
    }
  </>
);
