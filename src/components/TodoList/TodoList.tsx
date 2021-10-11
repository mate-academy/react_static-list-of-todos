import React from 'react';
import classNames from 'classnames';

import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';

import './TodoList.scss';

type Props = {
  todos: Todo[],
};

export const TodoList: React.FC<Props> = (props) => {
  const { todos } = props;

  return (
    <ul className="list">
      {todos.map(todo => (
        <li
          className={classNames('list__item',
            {
              'list__item--completed': todo.completed,
            })}
          key={todo.id}
        >
          {todo.user && <UserInfo user={todo.user} />}
          {todo.user && <TodoInfo todo={todo} />}
        </li>
      ))}
    </ul>
  );
};
