import React from 'react';
import TodoList from './components/TodoList/TodoList';

import { User } from './type/typeUser';
import { List } from './type/typeList';
import './App.scss';
import todos from './api/todos';
import users from './api/users';

const preparedTodos: List[] = todos.map((todo) => ({
  ...todo,
  user: users.find((user) => user.id === todo.userId) as User,
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList toDoAndUser={preparedTodos} />
  </div>
);

export default App;
