import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { Todos } from './react-app-env';
import TodoList from './components/TodoList/TodoList';

const App: React.FC = () => {
  const preparedTodos:Todos[] = todos.map(todo => {
    const findedUser = users.find(user => user.id === todo.userId);
    const currentUser = findedUser
      ? {
        name: findedUser.name,
        email: findedUser.email,
      }
      : null;

    return {
      ...todo,
      user: currentUser,
    };
  });

  return (
    <div className="App">
      <h1 className="title">Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
};

export default App;
