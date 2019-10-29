import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';
import ToDoList from './components/List/ToDoList';

function getTodosWithUsers(todoList, userList) {
  return todoList.map(todo => (
    {
      ...todo,
      user: userList.find(user => user.id === todo.userId),
    }
  ));
}

function App() {
  const preparedTodos = getTodosWithUsers(todos, users);
  console.log(preparedTodos);
  return (
    <div className="App">
      <ToDoList todos={preparedTodos} />

    </div>
  );
}

export default App;
