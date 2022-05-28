import React from 'react';
import './App.scss';
import { PreparedTodos, Todo, User } from './react-app-env';
import { TodoList } from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = (
  todosList: Todo[],
  usersList: User[],
): PreparedTodos[] => {
  return todosList.map(todo => ({
    ...todo,
    user: usersList.find(user => user.id === todo.userId) || null,
  }));
};

const todosPrepared = preparedTodos(todos, users);

const App: React.FC = () => (
  <div className="App">
    <h2>User List</h2>
    <TodoList
      todosPrepared={todosPrepared}
    />
  </div>
);

export default App;
