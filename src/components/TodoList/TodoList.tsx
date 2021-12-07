import React from 'react';

import { TodoInfo } from '../TodoInfo/TodoInfo';
import { Todo } from '../../types/todo';

import './TodoList.scss';

type Props = {
  preparedTodos: Todo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <div className="todoList">
    <ul className="todoList__list">
      {preparedTodos.map(todo => (
        <li className="todoList__todoItem" key={todo.id}>
          <TodoInfo todo={todo} />
        </li>
      ))}
    </ul>
  </div>
);
