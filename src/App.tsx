import React from 'react';
import './App.scss';
import { Todo } from './components/types/Todo';

import { TodoList } from './components/TodoList/TodoList';

import todosFromServer from './api/todos';
import usersFromServer from './api/users';

const preparedTodos: Todo[] = todosFromServer.map(todo => ({
  ...todo,
  user: usersFromServer.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
