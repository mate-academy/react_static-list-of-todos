/* eslint-disable no-param-reassign */
import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
// eslint-disable-next-line import/no-cycle
import { TodoList } from './components/TodoList/TodoList';
import { TodoType } from './react-app-env';

const preparedTodos: TodoType[] = todos.map(todo => (
  {
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  }
));

const App: React.FC = () => (
  <div className="App">
    <h1 className="title is-1 is-spaced mainTitle">Static list of todos</h1>
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
