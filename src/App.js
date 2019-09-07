import React from 'react';
import './App.css';
import users from './api/users';
import todos from './api/todos';
import TodoList from './components/TodoList/TodoList';

function App() {
  const preparedTodos = getTodosWithUsers(todos, users);

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

function getTodosWithUsers(todoArr, userArr) {
  return todoArr.map(todo => (
    {
      ...todo,
      user: userArr.find(item => item.id === todo.userId),
    }));
}

export default App;
