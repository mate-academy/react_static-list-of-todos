import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { ToDoList } from './components/ToDoList/ToDoList';

const preparedTodos = todos.map(todo => {
  const user = users.find(person => person.id === todo.userId) || null;

  return {
    ...todo,
    user,
  };
});

const App: React.FC = () => {
  return (
    <div className="App">
      <ToDoList todoList={preparedTodos} />
    </div>
  );
};

export default App;
