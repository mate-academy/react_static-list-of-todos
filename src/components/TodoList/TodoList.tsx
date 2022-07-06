import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  todos: Todo [];
};

export const TodoList: React.FC<Props> = ({ todos = [] }) => (
  <ul className="todos">
    {todos.map(todo => (
      <li key={todo.id} className="todos__item">
        <TodoInfo
          title={todo.title}
          completed={todo.completed}
        />
        <UserInfo user={todo.user} />
      </li>
    ))}
  </ul>
);
