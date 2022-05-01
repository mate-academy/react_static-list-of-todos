import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

import './ToDoList.scss';

type Props = {
  todos: Array<Todo>;
};

export const ToDoList: React.FC<Props> = ({ todos }) => (
  <ul className="todoList">
    {todos.map(todo => (
      <li className="todoList__item" key={todo.id}>
        <TodoInfo toDo={todo} />
      </li>
    ))}
  </ul>
);
