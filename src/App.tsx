import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';
import todos from './api/todos';

import users from './api/users';
import { Todo } from './types/Todo';

const preparedTodos: Todo[] = todos.map(todo => {
  const user = users.find(person => person.id === todo.userId) || null;

  return { ...todo, user };
});

const App: React.FC = () => (
  <div className="App">
    <TodoList Todos={preparedTodos} />
  </div>
);

export default App;
