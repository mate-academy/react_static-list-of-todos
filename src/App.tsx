import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import TodoList from './components/TodoList/TodoList';

const preparedToDos = todos
  .map(task => ({ ...task, user: users.find(person => person.id === task.userId) || null }));

const App: React.FC = () => (
  <div className="App">
    <TodoList tasksToDo={preparedToDos} />
  </div>
);

export default App;
