import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './component/TodoList';
import { Todo } from './types/Types';

const preparedTodos: Todo[] = todos.map(todo => ({
  ...todo,
  user: users.find(person => person.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <TodoList todoList={preparedTodos} />
  </div>
);

export default App;
