import { FC } from 'react';
import { TodoInfo } from '../TodoInfo';

import { Todo } from '../../types/Todo';

export const TodoList: FC<{ todos: Todo[] }> = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <li
        className={`TodoInfo ${todo.completed && 'TodoInfo--completed'}`}
        key={todo.id}
      >
        <TodoInfo
          title={todo.title}
          user={todo.user}
        />
      </li>
    ))}
  </ul>
);
