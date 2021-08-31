import React from 'react';
import { Todo } from '../types/TodoType';
import { UserInfo } from './UserInfo';
import { TodoInfo } from './TodoInfo';

interface Props {
  todos: Todo[];
}

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todo__list">
    {todos.map(aTodo => {
      return (
        <li className="todo">
          <UserInfo user={aTodo.user} />
          <TodoInfo {...aTodo} />
        </li>
      );
    })}
  </ul>
);
