import React from 'react';
import { TodoList } from './components/TodoList/TodoList';
import { Todo } from './components/Type/Todo';

import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos: Todo[] = todos.map((todo) => {
  return {
    ...todo,
    user: users.find((user) => (user.id === todo.userId)) || null,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <ul className="list">
      <TodoList todos={preparedTodos} />
    </ul>
  </div>
);

export default App;
