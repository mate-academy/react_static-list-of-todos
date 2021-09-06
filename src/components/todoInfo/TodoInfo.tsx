import React from 'react';
import { UserInfo } from '../userInfo/UserInfo';

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
      <td className="todo__title">
        {title}
      </td>
      <td className="todo__status">
        {completed ? 'done' : 'undone'}
      </td>
    </>
  );
};
