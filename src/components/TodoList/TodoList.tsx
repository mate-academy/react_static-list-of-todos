import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todoList">
    {todos.map(todo => (
      <li className="todoItem" key={todo.id}>
        {todo.user && <UserInfo user={todo.user} />}
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
