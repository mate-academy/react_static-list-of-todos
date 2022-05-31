import React from 'react';
import './App.scss';

import usersFromServer from './api/users';
import todosFromServer from './api/todos';
import TodoList from './components/TodoList/TodoList';
import { Todo, User, PreparedTodo } from './react-app-env';

const prepare = (
  users: User[],
  todos: Todo[],
): PreparedTodo[] => {
  return todos.map(todo => ({
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  }));
};

const preparedTodos = prepare(usersFromServer, todosFromServer);

const App: React.FC = () => (
  <div className="todo">
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
