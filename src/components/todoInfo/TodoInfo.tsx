import React from 'react';
import { UserInfo } from '../userInfo/userInfo';

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
      <div className="todo__title">
        {title}
      </div>
      <div className="todo__status">
        {completed ? 'done' : 'undone'}
      </div>
    </>
  );
};
