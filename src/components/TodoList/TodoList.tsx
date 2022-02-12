import React from 'react';
import classNames from 'classnames';
import { TodoInfo } from '../TodoInfo';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

import './TodoList.scss';

type Prop = {
  data: Todo[];
};

export const TodoList: React.FC<Prop> = ({ data }) => {
  return (
    <div className="todo-list">
      {data.map(todo => (
        <div
          key={todo.id}
          title={todo.user
            ? `Addrees -|- ${todo.user.address.city}`
              + `${todo.user.address.street} - ${todo.user.address.suite}`
            : 'Not have person who will be doing it'}
          className={classNames(
            'todo-list__item',
            { 'todo-list__item--done': todo.completed },
            { 'todo-list__item--nodone': !todo.completed },
          )}
        >
          <TodoInfo todo={todo} />
          {todo.user && (
            <UserInfo user={todo.user} />
          )}
        </div>
      ))}
    </div>
  );
};
