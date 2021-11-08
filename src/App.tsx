import React from 'react';
import './App.scss';
import { User } from './type/User';
import { TodoList } from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

interface Todos {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: User | null,
}

const preparedTodos: Todos[] = todos.map(todo => (
  {
    ...todo,
    user: users.find((item) => item.id === todo.userId) || null,
  }));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todo={preparedTodos} />
  </div>
);

export default App;
