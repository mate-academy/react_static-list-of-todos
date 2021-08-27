import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { Todo } from './types/Todo';
import { TodoList } from './components/TodoList';

const preparedTodos: Todo[] = todos.map(todo => {
  const user = users.find(person => person.id === todo.userId) || null;

  return { user, ...todo };
});

const App: React.FC = () => (
  <div className="App">
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
