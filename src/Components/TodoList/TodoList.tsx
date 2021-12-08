import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import { Todo } from '../../Types/Todo';

type Props = {
  todos: Todo[],
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <div className="todoList">
      <ul className="todoList_list">
        {todos.map((todo) => (
          <li className="todoList_item" key={todo.id}>
            <TodoInfo todo={todo} />
            {todo.user
              ? <UserInfo user={todo.user} />
              : <UserInfo user={{ name: 'User', email: 'Email' }} />}
          </li>
        ))}
      </ul>
    </div>
  );
};
