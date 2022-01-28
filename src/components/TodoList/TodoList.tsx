import React from 'react';
import { TodoOfUser } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  preparedTodos: TodoOfUser[],
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <>
    {preparedTodos.map(todo => (
      <TodoInfo
        key={todo.id}
        todo={todo}
      />
    ))}
  </>
);
