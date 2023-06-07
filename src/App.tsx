import React from 'react';
import './App.scss';

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

interface TodoUser {
  user: User;
}

const UserInfo: React.FC<TodoUser> = ({ user }) => {
  const {
    name,
    email,
  } = user;

  return (
    <a className="UserInfo" href={email}>
      {name}
    </a>
  );
};

interface TodoInfoType {
  todoInfo: Todo;
}

const TodoInfo: React.FC<TodoInfoType> = ({ todoInfo }) => {
  const {
    title,
    user,
  } = todoInfo;

  if (!user) {
    throw new Error('Cant find user');
  }

  return (
    <article className="TodoInfo TodoInfo--completed">
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={user} />
    </article>
  );
};

interface TodosList {
  todosList: Todo[];
}

const TodoList: React.FC<TodosList> = ({ todosList }) => {
  return (
    <section className="TodoList">
      {todosList.map(todoItem => <TodoInfo todoInfo={todoItem} />)}

      <article className="TodoInfo TodoInfo--completed">
        <h2 className="TodoInfo__title">JS</h2>

        <a className="UserInfo" href="mailto:Shanna@melissa.tv">
          Ervin Howell
        </a>
      </article>

      <article className="TodoInfo">
        <h2 className="TodoInfo__title">React</h2>

        <a className="UserInfo" href="mailto:Nathan@yesenia.net">
          Clementine Bauch
        </a>
      </article>
    </section>
  );
};

export const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList todosList={todos} />
  </div>
);
