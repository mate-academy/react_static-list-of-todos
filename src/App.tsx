import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';

import todosFromServer from './api/todos';
import usersFromServer from './api/users';
import { Todo } from './types/Todo';

const todos: Todo[] = todosFromServer.map(todo => ({
  ...todo,
  user: usersFromServer.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList todos={todos} />
  </div>
);

export default App;
