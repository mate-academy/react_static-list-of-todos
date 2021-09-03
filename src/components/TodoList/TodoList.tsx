import React from 'react';
import { TodoInfo } from '../TodoInfo';
import { UserInfo } from '../UserInfo';

type Props = {
  preparedTodos: TodoItem[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { preparedTodos } = props;

  return (
    <>
      {preparedTodos.map(todo => (
        <ul key={todo.id}>
          <TodoInfo todo={todo} />
          <li className="userInfo">{!todo.user ? 'null' : <UserInfo user={todo.user} />}</li>
        </ul>
      ))}
    </>
  );
};
