import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

function getTodosWithUsers(todosList, usersList) {
  const todosWithUsers = [...todosList];

  todosWithUsers.forEach((todo) => {
    // eslint-disable-next-line no-param-reassign
    todo.user = usersList.find(user => user.id === todo.userId);
  });

  return todosWithUsers;
}

function App() {
  const todosWithUsers = getTodosWithUsers(todos, users);

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
