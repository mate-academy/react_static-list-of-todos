import React from 'react';
import './App.scss';
import TodoList from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';
import { PreparedTodo } from './types/PreparedTodo';

const preparedTodos: PreparedTodo[] = todos.map(todo => {
  const userList = users.find(user => user.id === todo.userId);

  return ({
    ...todo,
    user: userList || null,
  });
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
