import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

import { Props } from './types/Props';
import { User } from './types/User';
import { Todo } from './types/Todo';

function getPreparedTodo(tod: Todo[], us: User[]) {
  const findUser = (t: Todo, u:User[]) => (
    u.find(user => user.id === t.userId)
  );

  return tod.map(todo => {
    return {
      ...todo,
      user: findUser(todo, us) || null,
    };
  });
}

const preparedTodo: Props[] = getPreparedTodo(todos, users);

const App: React.FC = () => (
  <div className="app">
    <h1 className="app__title">Todos</h1>
    <TodoList preparedTodo={preparedTodo} />
  </div>
);

export default App;
