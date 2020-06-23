import React from 'react';
import './App.css';
import { TodoList } from './components/TodoList/TodoList';
import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map((item) => {
  const newItem = { ...item };

  newItem.user = users.find(person => item.userId === person.id);

  return newItem;
});

function App() {
  return (
    <div className="App">
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
