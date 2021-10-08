import React from 'react';

import { TodoList } from './components/TodoList/TodoList';

import users from './api/users';
import todos from './api/todos';

import { PreparedTodo } from './types/PreparedTodo';

import './App.scss';

const App: React.FC = () => {
  const preparedTodos: PreparedTodo[] = todos.map(todo => {
    const findedUser = users.find(user => todo.userId === user.id) || null;

    return {
      ...todo,
      user: findedUser,
    };
  });

  return (
    <div className="App">
      <h1 className="App__title">Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
};

export default App;
