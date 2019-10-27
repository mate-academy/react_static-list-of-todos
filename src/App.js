import React from 'react';
import './App.css';
import TodoList from './componrnts/TodoList';
import todos from './api/todos';
import users from './api/users';

function getTodosWithUsers(todosList, usersList) {
  return todosList.map(todo => ({
    ...todo,
    user: usersList.find(user => todo.userId === user.id),
  }));
}

const preparedTodos = getTodosWithUsers(todos, users);

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
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
