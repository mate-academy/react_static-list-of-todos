import React from 'react';
import './App.scss';
import { User, Todo, Prepared } from './typedefs';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList';

function createPreparedTodos(usersData: User[], todosData:Todo[]):Prepared[] {
  return todosData.map((todo:Todo) => (
    {
      ...todo,
      user: usersData.find((user:User) => todo.userId === user.id) || null,
    }
  ));
}

const preparedTodos = createPreparedTodos(users, todos);

const App: React.FC = () => (
  <div className="App">
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
