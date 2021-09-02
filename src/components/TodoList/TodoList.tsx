import React from 'react';

import './TodoList.scss';

import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="list">
    {todos.map(todo => (
      <li
        className={
          todo.completed
            ? 'list__item list__item--completed'
            : 'list__item list__item--uncompleted'
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
