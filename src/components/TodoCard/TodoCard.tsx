import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

export type Props = {
  todo: Todo,
};

export const TodoCard: React.FC<Props> = ({ todo }) => (
  <div className="ui segments">
    <div
      className={classNames(
        'ui',
        {
          green: todo.completed,
          red: !todo.completed,
        },
        'segment',
      )}
    >
      <TodoInfo todo={todo} />
      {todo.user ? <UserInfo user={todo.user} /> : null}
    </div>
  </div>
);
