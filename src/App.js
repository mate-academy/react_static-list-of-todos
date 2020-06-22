import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList';

function getTodosWithUsers(todoList, userList) {
  return todoList.map(todo => ({
    ...todo,
    user: userList.find(user => user.id === todo.userId),
  }));
}

const todosWithUsers = getTodosWithUsers(todos, users);

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>Todos: </span>
        {todos.length}
      </p>

      <p>
        <span>Users: </span>
        {users.length}
      </p>
      <TodoList todos={todosWithUsers} />
    </div>
  );
}

export default App;
