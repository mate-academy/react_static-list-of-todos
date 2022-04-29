import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { Todo } from './Types.jsx';
import TodoList from './components/TodoList/TodoList';

const preparedTodos:Todo[] = todos.map(todo => ({
  ...todo,
  userInfo: users.find(userItem => userItem.id === todo.userId) || null,
}));

const App: React.FC = () => (

  <div className="App">

    <h1 className="center">Static list of todos</h1>

    <TodoList preparedTodos={preparedTodos} />

  </div>
);

export default App;
