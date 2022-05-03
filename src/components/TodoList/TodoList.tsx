import React from 'react';
import { FullTodo } from '../../FullTodo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

import './TodoList.scss';

type Props = {
  todoList: FullTodo[];
};

export const TodoList: React.FC<Props> = ({ todoList }) => (
  <ul className="todo-list">
    {todoList.map(todo => (
      <li className="todo-list__item" key={todo.id}>
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
