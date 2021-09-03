import React from 'react';
import { UserInfo } from '../UserInfo';

type Props = {
  todoItem: Todo;
};

export const TodoInfo: React.FC<Props> = (props) => {
  const { todoItem } = props;
  const { title, completed, user } = todoItem;

  return (
    <>
      {user
        ? <UserInfo user={user} />
        : null}
      <td>{title}</td>
      <td>{completed ? 'Done' : 'Failed'}</td>
    </>
  );
};
