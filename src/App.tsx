import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';
import { PreparedTodo } from './app.typedefs';
import todos from './api/todos';
import users from './api/users';

const preparedTodos: PreparedTodo[] = todos.map(todo => ({
  userId: todo.userId,
  id: todo.id,
  title: todo.title,
  completed: todo.completed,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
