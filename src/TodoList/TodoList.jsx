import React from 'react';
import { Todo } from '../Todo/Todo';
// eslint-disable-next-line import/no-cycle
import { preparedTodos } from '../App';

export const TodoList = () => (
  <>
    {preparedTodos.map(item => (
      <Todo
        key={item.id}
        task={item}
      />
    ))}
  </>
);
