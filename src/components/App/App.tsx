import React from 'react';
import './App.scss';
import { TodoList } from '../TodoList/TodoList';

import todos from '../../api/todos';
import users from '../../api/users';

export const preparedTodos = todos.map(todo => (
  {
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  }
));

const App: React.FC = () => (
  <div className="app">
    <h1 className="app__title"> Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
