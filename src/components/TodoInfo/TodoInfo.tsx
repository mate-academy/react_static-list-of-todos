import React from 'react';
import './TodoInfo.scss';

import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: Todo,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <div className="TodoInfo">
      <h2 className="TodoInfo__title" data-cy="title">
        {'Task: '}
        {todo.title}
      </h2>
      <div className="TodoInfo__status" data-cy="status">
        <p className="TodoInfo__status-title">Status: </p>
        <span className={todo.completed === true ? 'completed' : 'notcomleted'}>
          {!todo.completed && 'not '}
          completed
        </span>
      </div>
      <span>
        {todo.user && (
          <UserInfo
            name={todo.user.name}
            email={todo.user.email}
            id={todo.user.id}
          />
        )}
      </span>
    </div>
  </>
);
