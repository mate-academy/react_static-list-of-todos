import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = todos.map(todo => {
  const user = users.find(userObj => userObj.id === todo.userId) || null;

  return { user, ...todo };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Todo List</h1>
    <TodoList list={preparedTodos} />
  </div>
);

export default App;
