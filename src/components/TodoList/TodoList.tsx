import React from 'react';
import { Todo } from '../Todo';
import { TodoTypes } from '../types/TodoTypes';

type Props = {
  todos: TodoTypes[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <>
    {todos.map(todo => (
      <Todo key={todo.id} todo={todo} />
    ))}
  </>
);
