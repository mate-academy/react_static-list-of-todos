import React from 'react';
import './TodoList.scss';
import { TodoInfo } from '../TodoInfo/TodoInfo';

import { Todo } from '../types';

type Props = {
  todosList: Todo[],
};

export const TodoList: React.FC<Props> = ({ todosList }) => (
  <ul className="todoList">
    {todosList.map(todo => (
      <li className="todoList__todo" key={todo.id}>
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
