import React from 'react';
import { TodoInfo, Todo } from '../TodoInfo';

// Create a `TodoList` component accepting an array of `preparedTodos` and
// rendering them as a list

export const TodoList: React.FC<Todo[]> = (todoList: Todo[]) => {
  const todoListArray:Todo[] = Object.values(todoList);

  return (
    <div>
      { todoListArray.map(todo => <TodoInfo {...todo} />) }
    </div>
  );
};
