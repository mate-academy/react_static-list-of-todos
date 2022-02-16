import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { Todo } from './types/Todo';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodo: Todo[] = todos.map(task => {
  return {
    ...task,
    user: users.find(user => (user.id === task.userId)) || null,
  };
});

const App: React.FC = () => (
  <div className="App">
    <TodoList todos={preparedTodo} />
  </div>
);

export default App;
