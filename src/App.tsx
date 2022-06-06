import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import { PreparedTodo } from './types';
import { TodoList } from './components/TodoList';

const preparedTodo: PreparedTodo[] = todos.map(todo => {
  return {
    ...todo,
    user: users.find(user => user.id === todo.userId || null),
  };
});

const App: React.FC = () => (
  <div className="App">
    <TodoList preparedTodos={preparedTodo} />
  </div>
);

export default App;
