import React from 'react';
import './TodoInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';

import { Todo } from '../types';

type Props = {
  todo: Todo,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <ul className="todoInfo">
    <li><h2 className="todoInfo__title">{todo.title}</h2></li>
    <li className="todoInfo__state">
      {todo.completed ? 'completed' : 'not completed'}
    </li>
    <h3>Implementer:</h3>
    <li><UserInfo user={todo.user} /></li>
  </ul>
);
