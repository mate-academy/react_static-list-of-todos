import React from 'react';
import { Todo } from '../types/Todo';
import { UserInfo } from './UserInfo';

type Props = {
  todoItem: Todo;
};

export const TodoInfo: React.FC<Props> = (props) => {
  const { todoItem } = props;
  const { title, completed, user } = todoItem;

  return (
    <>
      <h2>
        {title}
      </h2>
      {user && (
        <p>
          <UserInfo user={user} />
        </p>
      )}
      <p>
        {completed ? 'Done' : 'In progress'}
      </p>
    </>
  );
};
