import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/UserInfo/TodoList/TodoList';
import { Todo } from './types/Todo';

const preparedTodos: Todo[] = todos.map(todo => {
  return {
    ...todo,
    user: users.find(user => todo.userId === user.id) || null,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="header">Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
