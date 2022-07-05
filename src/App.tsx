import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { Todo } from './Type/Todos';
// import { Users } from './Type/Users';
import TodoList from './components/TodoList/TodoList';

const preparedTodos: Todo[] = todos.map(todo => {
  const userList = users.find(user => user.id === todo.userId);

  return ({
    ...todo,
    user: userList || null,
  });
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList list={preparedTodos} />
  </div>
);

export default App;
