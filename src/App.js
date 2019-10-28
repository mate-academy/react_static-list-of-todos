import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/scripts/TodoList';

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
      <TodoList todos={todosWithUsers} />
    </div>
  );
}

export default App;
