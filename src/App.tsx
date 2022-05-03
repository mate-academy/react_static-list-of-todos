import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList';
import { Todo } from './types/Todo';
import todos from './api/todos';
import users from './api/users';

const preparedTodos: Todo[] = todos.map((todo) => ({
  ...todo,
  user: users.find((person) => person.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="page">
    <h1>Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
