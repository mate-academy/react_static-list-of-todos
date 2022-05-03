import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { Todolist } from './components/TodoList/TodoList';
import { Todo } from './types/Todo';

const preparedTodos: Todo[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="app">
    <h1 className="app__title">
      Static list of todos
    </h1>
    <Todolist preparedTodos={preparedTodos} />
  </div>
);

export default App;
