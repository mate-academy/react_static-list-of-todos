import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todoinfo: Todo;
};

export const TodoInfo: React.FC<Props> = (props) => {
  const { todoinfo } = props;
  const { title, completed, user } = todoinfo;

  return (
    <>
      {user && (
        <UserInfo todo={user} />
      )}
      <div className="list__title">{title}</div>
      <div className="list__Status">{completed ? 'true' : 'false'}</div>
    </>
  );
};
