import React from 'react';
import './App.scss';

import todosFromServer from './api/todos';
import usersFromServer from './api/users';
import { FullTodo, Todo, User } from './react-app-env';

import TodoList from './components/TodoList/TodoList';

const App: React.FC = () => {
  const preparedTodos = (
    todos: Todo[],
    users: User[],
  ): FullTodo[] => {
    return todos.map(todo => ({
      ...todo,
      user: users.find(user => user.id === todo.userId) || null,
    }));
  };

  const todos = preparedTodos(
    todosFromServer,
    usersFromServer,
  );

  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
