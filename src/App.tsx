import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';
import { Todo, User } from './react-app-env';
import 'bulma/css/bulma.min.css';

const preparedTodosFn = (
  todosArg: Todo[],
  usersArg: User[],
) => {
  return todosArg.map(todo => ({
    ...todo,
    user: usersArg.find(user => user.id === todo.userId) || null,
  }));
};

const preparedTodos = preparedTodosFn(todos, users);

const App: React.FC = () => (
  <div className="App hero is-success">
    <h1 className="title is-1">Static list of todos</h1>
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
