import React from 'react';

import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodosInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';

import './TodoList.scss';

type Props = {
  list: Todo[];
};

export const TodoList: React.FC<Props> = ({ list }) => (
  <ul className="list">
    {list.map(todo => (
      <li
        className={
          todo.completed
            ? 'list__item list__item--done'
            : 'list__item list__item--failed'
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
