import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const newTodos = todos.map(todo => {
  return {
    ...todo,
    user: users.find(user => user.id === todo.userId)
    || null,
  };
});

const App: React.FC = () => (
  <div className="container">
    <h1 className="todo">Static list of todos</h1>
    <TodoList newTodo={newTodos} />
  </div>
);

export default App;
