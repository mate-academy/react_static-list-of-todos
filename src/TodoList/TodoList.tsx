import React from 'react';
import { Todo } from '../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  todos: Todo[],
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todo-lists">
    {todos.map(todo => (
      <li key={todo.id} className="todo-list">
        <TodoInfo {...todo} />
      </li>
    ))}
  </ul>
);
