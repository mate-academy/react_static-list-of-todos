import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = todos.map(todo => {
  const user = users.find(el => el.id === todo.userId) || null;

  return {
    ...todo,
    user,
  };
});

const App: React.FC = () => (
  <>
    <h1 className="previewTitle">List of Users</h1>
    <TodoList todoes={preparedTodos} />
  </>
);

export default App;
