import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/';

const preparedTodos = todos.map(todo => {
  const todoCopy = {...todo};
  const matchingUser = users.find(user => (
    user.id === todoCopy.userId
  ));

  todoCopy.user = {...matchingUser};
  return todoCopy;
});

function App() {
  return (
    <TodoList todos={preparedTodos}/>
  );
}

export default App;
