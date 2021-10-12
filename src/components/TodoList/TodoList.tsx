import React from 'react';
import { TodoCard } from '../TodoCard/TodoCard';
import { Todo } from '../Types/Todo';

export const TodoList: React.FC<{ todos: Todo[]; }> = ({ todos }) => (
  <ul className="todoList">
    {todos.map(todo => (
      <li key={todo.id}>
        <div className={`${todo.completed ? 'completed' : 'notCompleted'} card-container`}>
          <TodoCard todo={todo} />
        </div>
      </li>
    ))}
  </ul>
);
