import React from 'react';
import { PreparedTodos } from '../../types/interfaces';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: PreparedTodos,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <h2 className="title">
      <strong className="title title__strong">
        Todo:
      </strong>
      <br />
      {todo.title}
    </h2>

    <form className="completed">
      <label htmlFor="completed">Completed: </label>
      <input
        id="completed"
        type="checkbox"
        checked={todo.completed}
        readOnly
      />
    </form>
    <p className="user">User info:</p>
    {todo.user && <UserInfo user={todo.user} />}
  </>
);
