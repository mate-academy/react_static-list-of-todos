import React from 'react';
import classNames from 'classnames';

import './TodoList.scss';

import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todos: Todo[],
};

export const TodoList: React.FC<Props> = (props) => {
  const { todos } = props;

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={classNames('card', { completed: todo.completed })}
          >
            {todo.user && <UserInfo user={todo.user} />}
            {todo.user && <TodoInfo todo={todo} />}
          </li>
        ))}
      </ul>
    </div>
  );
};
