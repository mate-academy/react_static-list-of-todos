import React from 'react';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (

  <li className="todos-list__todoInfo todoInfo">
    <div className="todoInfo__title">
      Task name:
      {todo.title}
    </div>
    <div className={todo.completed ? 'todoInfo__completed'
      : 'todoInfo__not-completed'}
    >
      Task status:
      {todo.completed ? 'completed' : 'not completed'}
    </div>
    <div>
      Manager name:
      {todo.user ? todo.user.name : 'no information'}
    </div>
    <div>
      Manager email:
      {todo.user ? todo.user.email : 'no information'}
    </div>
  </li>
);
