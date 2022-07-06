import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { Todo } from './components/types/Todo';
import TodoList from './components/TodoList/TodoList';

const preparedTodos: Todo[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => (user.id === todo.userId)),
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="app__title">Static list of todos</h1>
    <div className="container">
      <TodoList todos={preparedTodos} />
    </div>
  </div>
);

export default App;
