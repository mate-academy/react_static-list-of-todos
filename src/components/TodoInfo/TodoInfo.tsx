import React from 'react';
import { Todo } from '../../types/types';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  todos: Todo;
};
export const TodoInfo: React.FC<Props> = (props) => {
  const { todos } = props;

  return (
    <li className="list-item">
      <span>
        {todos.user && <UserInfo todos={todos.user} />}
      </span>
      <br />
      <span>
        {todos.title}
      </span>
      <br />
      {todos.completed
        ? <span><i>Complete</i></span>
        : <span><i>Incomplete</i></span>}
    </li>
  );
};
