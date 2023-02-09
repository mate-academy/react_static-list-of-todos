// Add the required types and props
import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type TodoListProps = {
  todos: Todo[]
};

export const TodoList:React.FC<TodoListProps> = ({ todos }) => (
  <ul>
    {todos.map((todo) => {
      return (
        <li key={todo.id}>
          <TodoInfo todo={todo} />
        </li>
      );
    })}
  </ul>
);
