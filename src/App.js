import React from 'react';
import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList';

function getTodoWithUsers(todoList, userList) {
  return todoList.map(todo => (
    {
      ...todo,
      user: userList.find(user => user.id === todo.userId),
    }));
}

function App() {
  return (
    <>
      <div className="App">
        <h1>Static list of todos</h1>
      </div>
      <TodoList todos={getTodoWithUsers(todos, users)} />
    </>
  );
}

export default App;
