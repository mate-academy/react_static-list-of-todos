import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = todos.map(todo => Object.assign(todo, {
  user: users.find(user => user.id === todo.userId || null),
}));

const App: React.FC = () => (
  <div className="App">
    <TodoList tods={preparedTodos} />
  </div>
);

export default App;
