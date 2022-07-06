import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: Todo,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    {todo.user && <UserInfo user={todo.user} />}
    <div className="user__info" key={todo.id}>
      <p data-cy="title">
        <strong>Title: </strong>
        {todo.title}
      </p>

      <p data-cy="status">
        <strong>Complited: </strong>
        {
          todo.completed
            ? 'Done'
            : 'In progress'
        }
      </p>
    </div>
  </>
);
