import React from 'react';
import { Todo } from '../../types/Todo';
import UserInfo from '../UserInfo/UserInfo';
import './TodoInfo.scss';

const TodoInfo: React.FC<Todo> = ({
  title,
  completed,
  user,
}) => (
  <>
    <div className="todoBlock">
      <strong>Todo name:</strong>
      {` ${title} `}
    </div>
    <div className="todoBlock">
      <strong>Todo status:</strong>
      {' '}
      {completed ? 'completed' : 'not completed'}
      {' '}
    </div>
    <div className="todoBlock">
      <strong>User information:</strong>
      {' '}
      {user ? <UserInfo {...user} /> : 'User was not found'}
    </div>
  </>
);

export default TodoInfo;
