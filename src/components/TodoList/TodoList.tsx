import React from 'react';
import { TodoInfo } from '../TodoInfo';
import { PreparedTodos } from '../../types/interfaces';
import './TodoList.scss';

type PreparedTodosList = {
  preparedTodos: PreparedTodos[],
};

export const TodoList: React.FC<PreparedTodosList> = ({ preparedTodos }) => (
  <ul className="TodoList">
    {
      preparedTodos.map((elem) => (
        <TodoInfo
          id={elem.id}
          title={elem.title}
          completed={elem.completed}
          user={elem.user}
        />
      ))
    }
  </ul>
);
