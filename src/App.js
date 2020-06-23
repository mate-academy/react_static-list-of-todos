import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList';

const compiledList = (todosList, usersList) => (
  todosList.map((todo) => {
    const user = usersList.find(person => person.id === todo.userId);

    return {
      ...todo, user,
    };
  })
);

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
