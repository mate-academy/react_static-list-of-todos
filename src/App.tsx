import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import { ToDos } from './types/ToDos';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos: ToDos[] = todos.map(todo => ({
  ...todo,
  user: users.find(person => person.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
