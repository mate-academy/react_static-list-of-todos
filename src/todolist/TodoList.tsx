import React from 'react';
import { TodoInfo } from '../todoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  todoList: Todo[];
};

export const TodoList: React.FC<Props> = ({ todoList }) => (
  <ul className="todoList">
    {todoList.map((todo) => (
      <li key={todo.id} className="todoItem">
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
