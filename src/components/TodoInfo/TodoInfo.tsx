import React from 'react';
import { PreparedTodo } from '../../react-app-env';
import UserInfo from '../UserInfo/UserInfo';

type Props = {
  todo: PreparedTodo,
};

const TodoInfo: React.FC<Props> = ({ todo }) => (
  <section className="hero is-info is-small">
    <div className="hero-body">
      <div className="title" data-cy="title">{todo.title}</div>
      <div data-cy="status">{`Completed: ${todo.completed}`}</div>
      {todo.user && (
        <UserInfo user={todo.user} />
      )}
    </div>
  </section>
);

export default TodoInfo;
