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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const todos: Todo[] = todosFromServer.map(todo => ({
  ...todo,
  user: getUser(todo.userId),
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>

    <section className="TodoList">
      <article className="TodoInfo TodoInfo--completed">
        <h2 className="TodoInfo__title">HTML</h2>

        <a className="UserInfo" href="mailto:Sincere@april.biz">
          Leanne Graham
        </a>
      </article>

      <article className="TodoInfo TodoInfo--completed">
        <h2 className="TodoInfo__title">CSS</h2>

        <a className="UserInfo" href="mailto:Sincere@april.biz">
          Leanne Graham
        </a>
      </article>

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
  </div>
);

export default App;
