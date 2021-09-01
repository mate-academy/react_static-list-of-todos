import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';
import { Todo } from './types/types';

let preparedTodos: Todo[] = [];

preparedTodos = todos.map(todo => {
  return ({
    user: users.find(userFromArray => userFromArray.id === todo.userId) || null,
  });
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="title">Static list of todos</h1>
    <TodoList todosArray={preparedTodos} />
  </div>
);

export default App;
