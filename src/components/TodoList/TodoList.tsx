import React from 'react';
import classNames from 'classnames';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoList.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { todos } = props;

  return (
    <div className="list">
      {todos.map(todo => (
        <div
          className={classNames(
            'list__item',
            {
              'list__item--true': todo.completed,
              'list__item--false': !todo.completed,
            },
          )}
        >
          {todo.user && <UserInfo user={todo.user} />}
          {todo.user && <TodoInfo todo={todo} />}
        </div>
      ))}
    </div>
  );
};
