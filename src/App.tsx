import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';
import { Todo } from './types/Todo';

const preparedTodos: Todo[] = todos.map(todo => {
  const todoUser = {
    ...todo,
    user: users.find(user => user.id === todo.userId),
  };

  return todoUser;
});

const App: React.FC = () => (
  <div className="App">
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
