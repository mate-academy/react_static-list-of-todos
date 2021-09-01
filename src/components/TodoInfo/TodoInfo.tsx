import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = (props) => {
  const { todo } = props;
  const { user, title, completed } = todo;

  return (
    <>
      {user && (
        <UserInfo user={user} />
      )}
      <>
        <div className="todo__title">
          {title}
        </div>
        <div className="todo__status">
          {completed ? 'Completed' : 'Not comleted'}
        </div>
      </>
    </>
  );
};
