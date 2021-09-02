import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

export const preparedTodos: Todo[] = todos.map(todo => {
  const user = users.find(person => person.id === todo.userId) || null;

  return { ...todo, user };
});

const App: React.FC = () => (
  <div className="App">
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
