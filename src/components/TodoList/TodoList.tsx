import React from 'react';
import { Todo } from '../../Type/Todos';
import TodoInfo from '../TodoInfo/TodoInfo';
import UserInfo from '../UserInfo/UserInfo';

const TodoList: React.FC<{ list: Todo[] }> = ({ list }) => {
  return (
    <ul>
      {list.map(todo => (
        <li>
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
