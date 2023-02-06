import React from 'react';
import './App.scss';
import todosFromServer from './api/todos';
import usersFromServer from './api/users';
import { User } from './types/User';
import { Todo } from './types/Todo';
import { TodoInfo } from './components/TodoInfo';

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
      {todos.map(
        todo => <TodoInfo {...todo} key={todo.id} />,
      )}
    </section>
  </div>
);
