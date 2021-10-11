import React from 'react';
import { Todo } from '../Types/Todo';
import { UserInfo } from './UserInfo';
import { TodoInfo } from './TodoInfo';

export const TodoList: React.FC<{ todoList: Todo[]; }> = ({ todoList }) => (
  <>
    {todoList.map((todo) => (
      <tr>
        <TodoInfo title={todo.title} completed={todo.completed} />
        {todo.user && <UserInfo user={todo.user} />}
      </tr>
    ))}
  </>
);
