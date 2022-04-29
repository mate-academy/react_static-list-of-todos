import React from 'react';
import './App.scss';
import { Todo } from './types/Todo';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos: Todo[] = todos.map((todo) => ({
  ...todo,
  user: users.find((user) => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <TodoList
      todos={preparedTodos}
    />
  </div>
);

export default App;
