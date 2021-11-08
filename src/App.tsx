import React from 'react';
import todos from './api/todos';
import users from './api/users';
import './App.scss';
import { TodoList } from './components/TodoList';

// import todos from './api/todos';
// import users from './api/users';
const preparedTodos = todos.map((todo) => ({
  ...todo,
  user: users.find((user) => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <header className="header">
      <h1 className="header__title">Static list of todos</h1>
    </header>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
