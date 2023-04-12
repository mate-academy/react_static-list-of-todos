import React from 'react';
import './App.scss';
import ClassNames from 'classnames';

import todosFromServer from './api/todos';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Todo } from './types/Todo';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  // if there is no user with a given userId
  return foundUser || null;
}

export const todos: Todo[] = todosFromServer.map(todo => ({
  ...todo,
  user: getUser(todo.userId),
}));

type UserInfoProps = {
  user: User | null;
};

const UserInfo: React.FC<UserInfoProps> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user?.email}`}>
    {user?.name}
  </a>
);

type TodoInfoProps = {
  todo: Todo;
};

const TodoInfo: React.FC<TodoInfoProps> = ({ todo }) => (
  <article className={ClassNames('TodoInfo',
    {
      'TodoInfo--completed': !todo.completed,
    })}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo user={todo.user} />
  </article>
);

type Props = {
  todolist: Todo[];
};

const TodoList: React.FC<Props> = ({ todolist }) => {
  return (
    todolist.map(todo => (
      <TodoInfo todo={todo} />
    ))
  );
};

export const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>

    <section className="TodoList">
      <TodoList todolist={todos} />
    </section>
  </div>
);
