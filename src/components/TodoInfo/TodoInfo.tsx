import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  todos: Todo;
};

export const TodoInfo: React.FC<Props> = (props) => {
  const { todos: information } = props;

  return (
    <div className="todo-info">
      <UserInfo {...information} />
      <h1>{information.title}</h1>
      <p>
        {`Status: ${information.completed ? 'has been completed' : 'not complete'}`}
      </p>
    </div>
  );
};
