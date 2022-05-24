import React from 'react';
import { Todos } from '../../types/Todos';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todos[],
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <div className="todoList">
    {todos.map((todo) => (
      <div className="todoItem">
        <TodoInfo
          key={todo.id}
          todo={todo}
        />
      </div>
    ))}
  </div>
);
