import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: PreparatedTodo
};
export const TodoInfo: React.FC<Props>
    = ({ todo }) => (
      <div className="todo">
        {todo.user
            && (
              <UserInfo user={todo.user} />
            )}

        <p data-cy="title">{todo.title}</p>
        <p data-cy="status">{todo.completed ? 'completed' : 'not completed'}</p>
      </div>
    );
