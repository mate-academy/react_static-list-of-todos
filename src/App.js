import React from 'react';
import './App.css';
import { TodoList } from './components/Todolist/Todolist';
import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map((todo) => {
  const newItem = { ...todo };

  newItem.user = users.find(person => todo.userId === person.id);

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
