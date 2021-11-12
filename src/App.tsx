import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { Todo } from './types/Todo';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos: Todo[] = todos.map(todo => {
  const theRightUser = users.find(user => user.id === todo.userId);
  const todoCopy = { ...todo };

  todoCopy.user = theRightUser || null;

  return todoCopy;
});

const App: React.FC = () => (
  <div className="app">
    <h1>Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
