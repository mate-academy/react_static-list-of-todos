import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';

import { Todo } from '../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  list: Todo[];
};

export const TodoList: React.FC<Props> = ({ list }) => (
  <ul className="list">
    {list.map(todo => (
      <li
        className={
          todo.completed
            ? 'list__item list__item--completed'
            : 'list__item list__item--progress'
        }
        key={todo.id}
      >
        {todo.user && (
          <UserInfo user={todo.user} />
        )}
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
