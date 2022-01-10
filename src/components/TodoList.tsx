import React from 'react';
import { TodoInfo } from './TodoInfo';
import { Todo } from '../Types/Todo';
import './TodoList.scss';

type Props = {
  todoses: Todo[]
};

export const TodoList: React.FC<Props> = ({ todoses }) => (
  <ul className="todoList">
    {todoses.map(todo => (
      <li className="todoList__todo" key={todo.id}>
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
