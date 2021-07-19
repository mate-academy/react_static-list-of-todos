import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = todos.map((item) => {
  const newItem = { ...item };

  newItem.user = users.find(user => (
    item.userId === user.id
  ));

  return newItem;
});

function App() {
  return (
    <div className="App">
      <TodoList prepTodos={preparedTodos} />
    </div>
  );
}

export default App;
