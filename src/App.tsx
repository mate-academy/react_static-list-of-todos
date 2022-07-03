import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

function getPrepared(inputTodos: Todo[], inputUsers: User[]): PreparedTodos[] {
  return inputTodos.map((todo: Todo) => ({
    ...todo,
    user: inputUsers.find((person: User) => person.id
    === todo.userId) || null,
  }));
}

const preparedTodos: PreparedTodos[] = getPrepared(todos, users);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList prepTodos={preparedTodos} />
  </div>
);

export default App;
