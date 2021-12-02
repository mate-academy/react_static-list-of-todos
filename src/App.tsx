import React from 'react';

// api
import todos from './api/todos';
import users from './api/users';

// components
import { TodoList } from './components/TodoList/TodoList';

// styles
import './App.scss';

const preparedTodos = todos.map(todo => {
  const todoForUser = {
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  };

  return todoForUser;
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="title">Static list of todos</h1>
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
