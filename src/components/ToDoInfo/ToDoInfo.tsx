import React from 'react';
import { User } from '../../types/User';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  user: User | null,
  title: string,
  completed: boolean,
};

export const ToDoInfo: React.FC<Props> = ({
  user,
  title,
  completed,
}) => (
  <>
    <h2 className="item__title">
      {'Task: '}
      <i>{title}</i>
    </h2>

    <label>
      Done:
      <input
        type="checkbox"
        defaultChecked={completed}
        className="item__checkbox"
      />
    </label>

    <UserInfo
      name={user?.name}
      email={user?.email}
    />
  </>
);
