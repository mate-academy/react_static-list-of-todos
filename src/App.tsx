import React from 'react';
import users from './api/users';
import todos from './api/todos';
// eslint-disable-next-line import/no-cycle
import { TodoList } from './components/TodoList';
import './App.scss';

const preparedTodos: Todo[] = todos.map(item1 => {
  const user = users.find(item2 => item2.id === item1.userId) || null;

  return { ...item1, user };
});

const App: React.FC = () => (
  <div className="App">
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
