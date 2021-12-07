import React from 'react';

import { Todo } from '../../types/todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

import './TodoList.scss';

type Props = {
  todos: Todo[],
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <div className="container">
      <ul>
        {todos.map(todo => (
          <li className="todoItem" key={todo.id}>
            <TodoInfo todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};
