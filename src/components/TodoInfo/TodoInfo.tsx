import React from 'react';
import classNames from 'classnames';
import { PreparedTodos } from '../interfaces/interfaces';
import UserInfo from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: PreparedTodos,
};

const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <>
      <h2 data-cy="title">
        <strong>Chore:</strong>
        {' '}
        {todo.title}
        <div className={classNames({ done: todo.completed })}> </div>
      </h2>
      <p data-cy="status">
        <strong>Status:</strong>
        {' '}
        {todo.completed ? 'completed' : 'in process'}
      </p>
      {todo.user && (
        <UserInfo user={todo.user} />
      )}
    </>
  );
};

export default TodoInfo;
