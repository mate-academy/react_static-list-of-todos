import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import { TodoList, PreparedTodos } from './components/TodoList/TodoList';

const preparedTodos: PreparedTodos[] = todos.map(item => {
  const thisUser = users.find(el => el.id === item.userId);

  return { ...item, user: thisUser };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList all={preparedTodos} />
  </div>
);

export default App;
