import React from 'react';
import { PreparedTodos } from '../../types/interfaces';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  todos: PreparedTodos[],
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <div className="todo-list">
    {todos.map(todo => (
      <div
        className="todo-list__todo"
        key={todo.id}
      >
        <TodoInfo todo={todo} />
      </div>
    ))}
  </div>
);
