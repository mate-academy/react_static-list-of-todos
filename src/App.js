import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import TodoList from './TodoList';

function App() {
  const todoArr = [...todos];
  const todosWithUsers = todoArr.map((todo) => {
    const user = users.find(person => person.id === todo.userId);

    return { ...todo, user };
  });

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>Todos: </span>
        {todos.length}
      </p>

      <TodoList todos={todosWithUsers} />
    </div>
  );
}

export default App;
