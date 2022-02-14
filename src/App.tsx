import React from 'react';
import TodoList from './Components/TodoList/TodoList';
import todos from './api/todos';
import users from './api/users';

import './App.scss';

const preparedTodos = todos.map(todo => {
  return {
    ...todo,
    user: users.find(elementUser => elementUser.id === todo.userId) || null,
  };
});

const App: React.FC = () => (
  <div className="app">
    <h1 className="app__title">Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
