import React from 'react';
import { PreparedTodos } from '../../react-app-env';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoList.scss';

interface Prop {
  todosPrepared: PreparedTodos[]
}

export const TodoList:React.FC<Prop> = ({ todosPrepared }) => (
  <div className="TodoBlock">
    {todosPrepared.map(todo => (
      <div className="TodoBlock__item" key={todo.id}>
        {todo.user && (
          <UserInfo user={todo.user} />
        )}
        <TodoInfo todo={todo} />
      </div>
    ))}
  </div>
);
