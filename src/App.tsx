import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Todo } from './types/Interfaces';
import { TodoList } from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

export const preparedTodos: Todo[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
