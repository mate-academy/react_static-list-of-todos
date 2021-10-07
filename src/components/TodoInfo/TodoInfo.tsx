import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = (props) => {
  const { todo } = props;
  const { title, completed, user } = todo;

  return (
    <>
      {user && (
        <UserInfo todo={user} />
      )}
      <div>{title}</div>
      <div>
        {completed ? 'completed' : 'uncompleted'}
      </div>
      <br />
    </>
  );
};
