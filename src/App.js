import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList';

const compiledList = (todosList, usersList) => (
  todosList.map(todo => ({
    ...todo,
    user: usersList.find(person => person.id === todo.userId),
  })));

const preparedList = compiledList(todos, users);

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={preparedList} />
    </div>
  );
}

export default App;
