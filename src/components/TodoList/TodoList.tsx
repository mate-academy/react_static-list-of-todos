import React from 'react';
import { PreparedTodo } from '../../types/PreparedTodos';
import { TodoInfo } from '../TodoInfo/TodoInfo';

// import './TodoList.scss';

type Props = {
  preparedTodos: PreparedTodo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ol className="todoList">
    {preparedTodos.map(preparedTodo => (
      <li key={preparedTodo.id} className="todoItem">
        <TodoInfo preparedTodo={preparedTodo} />
      </li>
    ))}
  </ol>
);
