import React from 'react';
import './App.scss';
import { User, Todo, Result } from './react-app-env';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList';

function createPreparedTodos(usersData: User[], todosData:Todo[]):Result[] {
  const usersCopy = usersData.map((user:User) => user);
  const todosCopy = todosData.map((todo:Todo) => todo);

  const result = todosCopy.map((todo:Todo) => (
    {
      ...todo,
      user: usersCopy.find((user:User) => todo.userId === user.id) || null,
    }
  ));

  return result;
}

const preparedTodos = createPreparedTodos(users, todos);

const App: React.FC = () => (
  <div className="App">
    <TodoList todo={preparedTodos} />
  </div>
);

export default App;
