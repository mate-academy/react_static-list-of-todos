import React from 'react';
import { PreparedTodo } from '../../types';
import { TodoInfo } from '../TodoInfo';

interface Props {
  preparedTodos: PreparedTodo[],
}

export const TodoList: React.FC<Props> = ({ preparedTodos }) => {
  return (
    <>
      {preparedTodos.map((todo: PreparedTodo) => {
        return (
          <li key={todo.id}>
            <TodoInfo todo={todo} />
          </li>
        );
      })}
    </>
  );
};
