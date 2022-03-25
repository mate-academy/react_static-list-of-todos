import React from 'react';
import './App.scss';

import todosFromServer from './api/todos';
import usersFromServer from './api/users';

import { TodoList } from './components/TodoList/TodoList';

import { Todo, TodoUser } from './types/Todo';
import { User } from './types/User';

function prepareTodos(todos: Todo[], users: User[]): TodoUser[] {
  return todos.map(todo => ({
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  }));
}

const preparedTodos = prepareTodos(todosFromServer, usersFromServer);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
