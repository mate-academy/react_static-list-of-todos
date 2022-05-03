import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../ToDoInfo/ToDoInfo';

import './ToDoList.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="toDoList">
    {todos.map(todo => (
      <li className="toDoList__item" key={todo.id}>
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
