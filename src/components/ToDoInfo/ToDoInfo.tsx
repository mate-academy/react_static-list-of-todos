import React from 'react';
import { ToDo } from '../../types/ToDo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = Pick<ToDo, 'user' | 'title' | 'completed'>;

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

    {user && (
      <UserInfo
        name={user.name}
        email={user.email}
      />
    )}
  </>
);
