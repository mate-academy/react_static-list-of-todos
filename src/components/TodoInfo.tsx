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
      <span>
        {`Task: ${title}. `}
      </span>
      {user && (
        <div className="badge badge-light">
          <UserInfo user={user} />
        </div>
      )}
      {completed && (
        <span className="float-right">
          Done
        </span>
      )}
    </>
  );
};
