import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = [];

todos.forEach((todo) => {
  const user = users.find(person => person.id === todo.userId);

  if (user !== undefined) {
    preparedTodos.push({
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      user,
    });
  }
});

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Static list of todos</h1>
      <div className="todo">
        <TodoList todoList={preparedTodos} />
      </div>
    </div>
  );
}

export default App;
