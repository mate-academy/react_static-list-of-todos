import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';

import { Todo } from './types';
import { TodoList } from './components/TodoList/TodoList';

const PreparedTodos: Todo[] = todos.map(todo => {
  return {
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  };
});

const App: React.FC = () => (
  <div className="App">
    <TodoList todos={PreparedTodos} />
  </div>
);

export default App;
