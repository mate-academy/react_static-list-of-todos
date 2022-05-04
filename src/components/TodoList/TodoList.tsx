import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { PreparedTodos } from '../../types/interfaces';
import './TodoList.scss';

type Props = {
  preparedTodos: PreparedTodos[],
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="todoList">
    {
      preparedTodos.map((elem) => (
        <TodoInfo
          key={elem.id}
          elem={elem}
        />
      ))
    }
  </ul>
);
