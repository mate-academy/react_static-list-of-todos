import React from 'react';
import { Todo } from '../../types/Todo';

import { TodoInfo } from '../TodoInfo';

interface TodoListProps {
  todos : Todo[]
}

export const TodoList :React.FC<TodoListProps> = ({ todos }) => {
  if (todos.length) {
    return (
      <>
        {todos.map((todo: Todo) => (
          <TodoInfo
            key={todo.id}
            todo={todo}
          />
        ))}
      </>
    );
  }

  return null;
};
