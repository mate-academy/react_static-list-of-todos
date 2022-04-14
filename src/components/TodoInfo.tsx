import React from 'react';
import { Todo } from '../types/Todo';

type Props = {
  todos : Todo[];
};

export const TodoInfo: React.FC<Props> = ({ todos }) => (
  <>
    <ul>
      {todos.map(todo => (
        <li>
          {`${todo.title} - ${todo.completed}`}
        </li>
      ))}
    </ul>
  </>
);
