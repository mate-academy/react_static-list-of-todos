import React from 'react';
import { Todo, TodoListProps } from '../../types';
import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      { props.preparedTodos.map((todo: Todo) => (
        <TodoInfo todo={todo} />
      ))}
    </ul>
  );
};
