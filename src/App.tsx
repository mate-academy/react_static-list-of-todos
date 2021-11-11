import React from 'react';
import './App.scss';
import { Todo, PreparedTodo } from './types/types';
import { Todolist } from './components/Todolist/Todolist';

import todos from './api/todos';
import users from './api/users';

const preparedTodos: PreparedTodo[] = todos.map((todo: Todo) => {
  return {
    ...todo,
    user: (users.find(user => user.id === todo.userId) || null),
  };
});

const App: React.FC = () => (
  <div className="App">
    <Todolist todos={preparedTodos} />
  </div>
);

export default App;
