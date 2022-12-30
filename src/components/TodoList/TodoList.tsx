import React from 'react';
import cn from 'classnames';
import { Todo } from '../../types/Todo';
import { User } from '../../types/User';

type Props = {
  todos: Todo[];
};

type Props2 = {
  todo: Todo;
};

type Props3 = {
  user: User;
};

export const UserInfo: React.FC<Props3> = ({ user }) => {
  const {
    name,
    email,
  } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};

export const TodoInfo: React.FC<Props2> = ({ todo }) => {
  const {
    completed,
    title,
    user,
    id,
  } = todo;

  return (
    <article
      key={id}
      className={cn('TodoInfo', {
        'TodoInfo--completed': completed,
      })}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      {user && (
        <UserInfo user={user} />
      )}
    </article>
  );
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <section className="TodoList">
    {todos.map((todo) => (
      <TodoInfo key={todo.id} todo={todo} />
    ))}
  </section>
);
