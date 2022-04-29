import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todos: Todo[];
};

export const TodoList:React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <TodoInfo
            todo={todo}
          />
          {todo.user && (<UserInfo user={todo.user} />)}
        </li>
      ))}
    </ul>
  );
};
