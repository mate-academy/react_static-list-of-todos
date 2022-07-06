// Don't forget to import the React library
import React from 'react';
import { PreparedToDo } from '../../types/PreparedToDo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  preparedTodos: PreparedToDo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="todolist">
    {preparedTodos.map(preparedToDo => (
      <li key={preparedToDo.id}>
        <TodoInfo preparedToDo={preparedToDo} />
      </li>
    ))}
  </ul>
);
