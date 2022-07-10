import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';
import { Todo } from './types/Todo';

// eslint-disable-next-line
import todos from './api/todos';
// eslint-disable-next-line
import users from './api/users';

const beforeTodo: Todo[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todos={beforeTodo} />
  </div>
);

export default App;
