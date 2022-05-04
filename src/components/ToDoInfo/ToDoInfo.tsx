import React from 'react';

import classNames from 'classnames';

import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

import './ToDoInfo.scss';

type Props = {
  todo: Todo,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className="todoInfo">
    <h2 className="todoInfo__title">
      {todo.title}
    </h2>
    <div className={classNames('toDoInfo__completeField1',
      { todoInfo__completeField_true: todo.completed })}
    >
      <label htmlFor="completedCheck">Completed:</label>
      <input
        type="checkBox"
        id="completedCheck"
        checked={todo.completed}
        readOnly
      />
    </div>
    {todo.user && <UserInfo user={todo.user} />}
  </div>
);
