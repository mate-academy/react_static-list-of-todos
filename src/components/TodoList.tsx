import React from 'react';
import classNames from 'classnames';
import './TodoList.scss';
import { Todo } from '../types/Todo';
import { TodoInfo } from './TodoInfo';
import { UserInfo } from './UserInfo';

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
          {todo.user && <UserInfo {...todo.user} />}
          <TodoInfo {...todo} />
        </div>
      ))}
    </div>
  );
};
