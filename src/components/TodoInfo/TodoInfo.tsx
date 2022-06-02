import React from 'react';
import { Todo } from '../../interfaces/Todo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = Todo;

export const TodoInfo: React.FC<Props> = ({
  title,
  completed,
  user,
}) => {
  return (
    <>
      <h1 className="item__title" data-cy="title">{title}</h1>
      <p className="item__status" data-cy="status">
        Status:
        {completed
          ? ' completed'
          : ' not completed'}
      </p>
      <UserInfo
        name={user?.name}
        email={user?.email}
      />
    </>
  );
};
