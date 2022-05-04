import React from 'react';
import './TodoList.scss';
import { Todos } from '../../types/interfaces';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type PreparedTodosList = {
  preparedTodos: Todos[];
};

export const TodoList: React.FC<PreparedTodosList> = ({ preparedTodos }) => (
  <ul className="TodoList">
    {
      preparedTodos.map((element) => (
        <TodoInfo
          key={element.id}
          userId={element.userId}
          id={element.id}
          title={element.title}
          completed={element.completed}
          user={element.user}
        />
      ))
    }
  </ul>
);
