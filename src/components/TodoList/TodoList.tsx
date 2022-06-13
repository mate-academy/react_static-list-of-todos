import React from 'react';
import { PreparedTodos } from '../../types/Types';
import TodoInfo from '../TodoInfo/TodoInfo';

type Props = {
  preparedTodos: PreparedTodos[];
};

const TodoList:React.FC<Props> = ({ preparedTodos }) => (
  <ul>
    {preparedTodos.map(preparedTodo => (
      <li key={preparedTodo.id}>
        <TodoInfo todo={preparedTodo} />
      </li>
    ))}
  </ul>
);

export default TodoList;
