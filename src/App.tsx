import React from 'react';
import './App.scss';

import todosFromServer from './api/todos';
import usersFromServer from './api/users';
import { Todo } from './types/Todo';
import { User } from './types/User';
import { FullTodo } from './types/FullTodo';
import { TodoList } from './components/TodoList/TodoList';

function prepared(
  todos: Todo[],
  users : User[],
): FullTodo[] {
  return todos.map(todo => ({
    ...todo,
    user: users.find(user => user.id === todo.userId),
  }));
}

const preparedTodos = prepared(todosFromServer, usersFromServer);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todoList={preparedTodos} />
  </div>
);

export default App;
