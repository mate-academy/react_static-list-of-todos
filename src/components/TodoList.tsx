import React from 'react';
import { TodoInfo } from './TodoInfo';

import './TodoList.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { todos } = props;

  return (
    <ul className="list">
      {todos.map(todo => (
        <li className="list__item">
          <TodoInfo todo={todo} />
        </li>
      ))}
    </ul>
  );
};
