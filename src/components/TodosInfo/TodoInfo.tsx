import React from 'react';
import { UserWithTask } from '../../types/Todo';
import { UserInfo } from '../UserInfo';
import './TodosInfo.css';

type Props = {
  todo:UserWithTask,
};

export const TodoInfo:React.FC<Props> = ({ todo }) => {
  const completed = todo.completed ? 'Completed' : 'Not completed';

  return (
    <div className="todos__content">
      <h2 className="todos__title">{todo.title}</h2>
      <p className="todos__status">{completed}</p>
      {todo.user && (
        <div className="todos__user">
          <UserInfo
            name={todo.user.name}
            email={todo.user.email}
          />
        </div>
      )}
    </div>
  );
};
