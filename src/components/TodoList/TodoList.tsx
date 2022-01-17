import React from 'react';

import { PrepearedTodo } from '../../types/PrepearedTodo';
import { TodoInfo } from '../TodoInfo';
import './TodoList.scss';

type Props = {
  todos: PrepearedTodo[]
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
