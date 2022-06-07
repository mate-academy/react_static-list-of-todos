import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import { PreparedTodo } from './types';
import { TodoList } from './components/TodoList';

const preparedTodos: PreparedTodo[] = todos.map((todo) => {
  const user = users.find(person => person.id === todo.userId) || undefined;

  return (
    {
      ...todo,
      user,
    }
  );
});

const App: React.FC = () => (
  <div className="App">
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
