import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList
        todos={preparedTodos}
      />
    </div>
  );
}

function getTodoWithUsers(ListOfTodo, ListOfUsers) {
  return ListOfTodo.map(todo => (
    {
      ...todo,
      user: ListOfUsers.find(user => user.id === todo.userId),
    }));
}

const preparedTodos = getTodoWithUsers(todos, users);

export default App;
