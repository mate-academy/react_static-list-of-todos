import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { Todo } from '../../types/todo';
import './TotdoList.scss';

type Props = {
  preparedTodos: Todo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="list">
    {preparedTodos.map(item => (
      <li
        key={item.id}
        className="list__item"
      >
        <TodoInfo todo={item} />
      </li>
    ))}
  </ul>
);
