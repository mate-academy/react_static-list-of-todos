import React from 'react';
import { TodoInfo } from '../TodoInfo';
import { UserInfo } from '../UserInfo';

import './todoList.scss';

type Props = {
  preparedTodos: TodoItem[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { preparedTodos } = props;

  return (
    <ul className="todoList">
      {preparedTodos.map(todo => (
        <li key={todo.id}>
          <TodoInfo todo={todo} />
          {todo.user && (
            <p className="userInfo">
              <UserInfo user={todo.user} />
            </p>
          )}
        </li>
      ))}
    </ul>
  );
};
