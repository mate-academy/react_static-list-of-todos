import React from 'react';
import './App.css';
import TodoList from './components/table/TodoList';
import todos from './api/todos';
import users from './api/users';

function getTodosWithUsers(todoList, userList) {
  return todoList.map(todo => ({
    ...todo,
    user: userList.find(item => item.id === todo.userId),
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
