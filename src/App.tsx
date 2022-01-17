import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos: PreparedTodo[] = todos.map((todo) => {
  const correctUser = users.find((user) => (user.id === todo.userId));

  const prepared: PreparedTodo = {
    ...todo,
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
