import React from 'react';

import TodoList from './components/TodoList/TodoList';

import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => {
  return {
    title: todo.title,
    completed: todo.completed,
    user: users.find(user => user.id === todo.userId) || null,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
