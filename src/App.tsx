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

export const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <section className="TodoList">
      {todos.map((todo) => (
        todo.completed
          ? (
            <article className="TodoInfo TodoInfo--completed">
              <h2 className="TodoInfo__title">{todo.title}</h2>

              <a className="UserInfo" href={todo.user?.email}>
                {todo.user?.name}
              </a>
            </article>
          )
          : (
            <article className="TodoInfo">
              <h2 className="TodoInfo__title">{todo.title}</h2>

              <a className="UserInfo" href={todo.user?.email}>
                {todo.user?.name}
              </a>
            </article>
          )
      ))}
    </section>
  </div>
);
