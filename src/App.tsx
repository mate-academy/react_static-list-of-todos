import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { Todo } from './types/Todo';

import { TodoList } from './components/TodoList';

const preparedTodos = todos.map((todo) => {
  const todoCopy: Todo = {
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  };

  return todoCopy;
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__heading">Static list of todos</h1>
    <TodoList taskList={preparedTodos} />
  </div>
);

export default App;
