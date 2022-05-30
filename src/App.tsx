import React from 'react';
import './App.scss';

import todosFromServer from './api/todos';
import usersFromServer from './api/users';
import { PreparedTodo, Todo, User } from './react-app-env';
import { TodoList } from './components/TodoList/TodoList';

const prepareTodos = (
  todos: Todo[],
  users: User[],
): PreparedTodo[] => {
  return todos.map(todo => ({
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  }));
};

const preparedTodos = prepareTodos(todosFromServer, usersFromServer);

const App: React.FC = () => (
  <div className="App">
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
