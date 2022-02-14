import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/Todolist/TodoList';

const preparedTodos = todos.map(todo => {
  const user = users.find(el => el.id === todo.userId) || null;

  return {
    ...todo,
    user,
  };
});

const App: React.FC = () => (
  <div className="App">
    <TodoList todoes={preparedTodos} />
  </div>
);

export default App;
