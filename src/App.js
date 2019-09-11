import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

const usersList = usersListTodo(todos, users);

function App() {
  return (
    <>
      <h1 className="App">Static list of todos</h1>
      <TodoList todos={usersList} />
    </>
  );
}

function usersListTodo(todosArray, usersArray) {
  return todosArray.map(todo => ({
    ...todo,
    user: usersArray.find(person => person.id === todo.userId),
  }));
}

export default App;
