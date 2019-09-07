import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

function getTodosWithUsers(todosList, usersList) {
  return todosList.map(todo => ({
    ...todo,
    user: usersList.find(user => user.id === todo.userId),
  }));
}

function App() {
  const preparedTodos = getTodosWithUsers(todos, users);

  console.log(preparedTodos);

  return (
    <div className="App todoList">
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
