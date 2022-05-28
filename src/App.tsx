import React from 'react';
import './App.scss';
import TodoList from './components/TodoList/TodoList';
import todosFromApi from './api/todos';
import usersFromApi from './api/users';

const preparedTodos = todosFromApi.map(todo => {
  return {
    ...todo,
    user: usersFromApi.find(user => todo.userId === user.id || null),
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
