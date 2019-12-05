import React from 'react';
import todos from './api/todos';
import users from './api/users';
import './App.css';
import TodoList from './TodoList';

const getTodosWithUsers = (todoList, userList) => todoList.map(
  todo => ({
    ...todo,
    user: userList.find(person => person.id === todo.userId),
  }),
);

const preparedTodos = getTodosWithUsers(todos, users);

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
