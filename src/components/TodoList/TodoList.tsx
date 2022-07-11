import React from 'react';
import { Todo } from '../../Type/Todos';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';

type Prop = {
  list: Todo[]
};

const TodoList: React.FC<Prop> = ({ list }) => {
  return (
    <ul>
      {list.map(todo => (
        <li key={todo.id}>
          {todo.user && (
            <UserInfo user={todo.user} />
          )}
          <TodoInfo todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
