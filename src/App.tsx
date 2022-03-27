import React from 'react';
import './App.scss';

import { Todo } from './types/Todo';
import { User } from './types/User';
import { PreparedTodo } from './types/PreparedTodo';

import todosFromServer from './api/todos';
import usersFromServer from './api/users';
import { TodoList } from './components/TodoList/TodoList';

function prepareDotos(
  todos: Todo[],
  users: User[],
): PreparedTodo[] {
  return todos.map((todo) => ({
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  }));
}

const preparedTodos = prepareDotos(todosFromServer, usersFromServer);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
