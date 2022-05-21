import React from 'react';
import './TodoInfo.scss';

import { UserInfo } from '../UserInfo/UserInfo';

import { Todo } from '../../types/Todo';

export const TodoInfo: React.FC<Todo> = ({ title, completed, user }) => (
  <>
    <div className="TodoInfo">
      <h2 className="TodoInfo__title">
        {'Task: '}
        {title}
      </h2>
      <div className="TodoInfo__status">
        <p className="TodoInfo__status-title">Status: </p>
        <span className={completed === true ? 'completed' : 'notcomleted'}>
          {completed === true ? 'completed' : 'not completed'}
        </span>
      </div>
      <p className="TodoInfo__userdata">
        <span className="TodoInfo__userdata-header">User data:</span>
      </p>
      <span>
        {(user === null)
          ? 'No user info'
          : <UserInfo {...user} />}
      </span>
    </div>
  </>
);
