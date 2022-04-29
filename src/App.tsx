import React from 'react';
import todos from './api/todos';
import users from './api/users';
import { PreparedTodo } from './types/PreparedTodo';
import { TodoList } from './components/TodoList/TodoList';

import './App.scss';

const preparedTodos: PreparedTodo[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
