import React from 'react';
import './App.scss';
import { Todo, User, PreparedTodo } from './types/types';
import { Todolist } from './components/Todolist/Todolist';

import todos from './api/todos';
import users from './api/users';

const preparedTodos: PreparedTodo[] = todos.map((todo: Todo) => {
  const todoUser: User | undefined = users.find(user => user.id === todo.userId);

  return {
    ...todo,
    user: (todoUser || null),
  };
});

const App: React.FC = () => (
  <div className="App">
    <Todolist preparedTodos={preparedTodos} />
  </div>
);

export default App;
