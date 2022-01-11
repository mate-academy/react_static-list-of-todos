import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';
import { Todo, PreparedTodo } from './types/types';

const preparedTodos: PreparedTodo[] = todos.map((todo: Todo) => {
  const correctUser = users.find((user) => (user.id === todo.userId));

  const prepared: PreparedTodo = {
    userId: todo.userId,
    id: todo.id,
    title: todo.title,
    completed: todo.completed,
    user: correctUser || null,
  };

  return prepared;
});

const App: React.FC = () => (
  <div className="App">
    <TodoList todo={preparedTodos} />
  </div>
);

export default App;
