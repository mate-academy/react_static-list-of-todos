import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { Todos } from '../../types/types';
import './TodoList.scss';

type Props = {
  preparedTodos: Todos[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="App__list">
    {preparedTodos.map(el => (
      <li key={el.id} className="App__list_item">
        <TodoInfo {...el} />
      </li>
    ))}
  </ul>
);
