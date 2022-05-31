import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';

import {
  Todo,
  User,
  PreparedTodo,
} from './react-app-env';

import todosFromServer from './api/todos';
import usersFromServer from './api/users';

const App: React.FC = () => {
  const preparePreparedTodos = (todos: Todo[], users: User[])
  : PreparedTodo[] => {
    return todos.map(todo => ({
      ...todo,
      user: users.find(user => todo.userId === user.id) || null,

    }));
  };

  const preparedTodos = preparePreparedTodos(todosFromServer, usersFromServer);

  return (
    <div className="App">
      <h1 className="MainTitle">Static list of todos</h1>
      <TodoList fullTodos={preparedTodos} />
    </div>
  );
};

export default App;
