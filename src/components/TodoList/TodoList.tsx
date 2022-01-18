import React from 'react';

import { PreparedTodo } from '../../types/PreparedTodo';
import { TodoInfo } from '../TodoInfo';
import './TodoList.scss';

type Props = {
  todos: PreparedTodo[]
};

export const TodoList:React.FC<Props> = ({ todos }) => {
  return (
    <>
      {todos.map(todo => (
        <TodoInfo
          key={todo.id}
          todo={todo}
        />
      ))}
    </>
  );
};
