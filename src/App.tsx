import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';
import { Props } from './types/Props';

const preparedTodos = todos.map(todo => Object.assign(todo, {
  user: users.find(user => user.id === todo.userId || null),
}));

const App: React.FC<Props> = () => (
  <div className="App">
    <TodoList todoos={preparedTodos} />
  </div>
);

export default App;
