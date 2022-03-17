import React from 'react';
import { Todo } from '../types/Todo';
import { TodoInfo } from './TodoInfo';
import { UserInfo } from './UserInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todo__list">
    {todos.map(todo => (
      <li
        key={todo.id}
        className={todo.completed ? 'todo__item todo__item--completed' : 'todo__item'}
      >
        <TodoInfo
          title={todo.title}
          completed={todo.completed}
        />
        {todo.user && (
          <UserInfo user={todo.user} />
        )}
      </li>
    ))}
  </ul>
);
