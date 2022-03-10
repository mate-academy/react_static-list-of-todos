import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { Todo } from './types/Todo';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodosFromServer: Todo[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <TodoList preparedTodos={preparedTodosFromServer} />
  </div>
);

export default App;
