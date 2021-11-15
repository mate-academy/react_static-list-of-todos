import React from 'react';
import './App.scss';
import { Todo } from './types/types';
import { TodoList } from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos: Todo[] = todos.map(todo => {
  return {
    ...todo,
    user: users.find(person => person.id === todo.userId || null),
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todo={preparedTodos} />
  </div>
);

export default App;
