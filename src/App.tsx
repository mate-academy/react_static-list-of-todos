import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

const App: React.FC = () => {
  const preparedTodos = todos.map(todo => {
    const findedUser = users.find(user => user.id === todo.userId);

    return {
      ...todo,
      user: findedUser || null,
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
