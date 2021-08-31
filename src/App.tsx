import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import Todolist from './components/TodoList/TodoList';

export const preparedTodos = todos.map((todo) => {
  const user = users.find(({ id }) => id === todo.userId);
  const copy = {
    ...todo,
    user: user || null,
  };

  return copy;
});

const App: React.FC = () => (
  <div className="app">
    <h1 className="app__title">Static list of todos</h1>
    <Todolist todos={preparedTodos} />
  </div>
);

export default App;
