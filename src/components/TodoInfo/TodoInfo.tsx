import React from 'react';
import style from './TodoInfo.module.css';
import { PreparedTodo } from '../../types/Types';
import UserInfo from '../UserInfo/UserInfo';

type Props = {
  todo: PreparedTodo,
};

const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className={style.todoContainer}>
    <div className={style.todoInfo}>
      <div className={style.todoTask}>
        <h2>
          {todo.title}
        </h2>
      </div>

      <input type="checkbox" checked={todo.completed} />
    </div>

    {todo.user && (
      <div className={style.todoUser}>
        <UserInfo user={todo.user} />
      </div>
    )}
  </div>
);

export default TodoInfo;
