import React from 'react';

// components
import { TodoInfo } from '../TodoInfo';

// types
import { Todo } from '../../types/todo';

// styles
import './TodoList.scss';

type Props = {
  preparedTodos: Todo[];
};

export const TodoList:React.FC<Props> = ({ preparedTodos }) => {
  return (
    <div className="container">
      <ul>
        {preparedTodos.map(todo => (
          <li className="todoItem" key={todo.id}>
            <TodoInfo todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};
