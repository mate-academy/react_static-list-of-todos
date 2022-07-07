import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

const preparedTodos = todos.map(todo => {
  const userLink = users.find(user => user.id === todo.userId) || null;

  return {
    ...todo,
    user: userLink,
  };
});

const App: React.FC = () => (
  <div className="app">
    <h1 className="app__title">Static list of todos</h1>
    <TodoList todoList={preparedTodos} />
  </div>
);

export default App;
