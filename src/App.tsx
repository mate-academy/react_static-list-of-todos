import React from 'react';
import './App.scss';

import todosFromServer from './api/todos';
import usersFromServer from './api/users';

import { TodoList } from './components/TodoList';
import { PreparedTodo } from './types/PreparedTodo';

const preparedTodos: PreparedTodo[] = todosFromServer.map(todo => {
  const user = usersFromServer.find(person => person.id === todo.userId) || null;
  const preparedTodo = { ...todo, user };

  return preparedTodo;
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
