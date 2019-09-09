import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import TodoList from './Components/TodoItem/TodoItem';

function getTodosWithUsers(todo, usersList) {
  return todo.map(item => (
    {
      ...item,
      user: usersList.find(user => user.id === item.userId),
    }
  ));
}

const preparedTodos = getTodosWithUsers(todos, users);

function App() {
  return (
    <>
      <div className="App">
        <h1 className="App-title">
          Static list of todos
        </h1>
        <p className="todos todos__count">
          <span className="todos__title">Todos: </span>
          {todos.length}
        </p>

        <p className="Users-count">
          <span>Users: </span>
          {users.length}
        </p>
      </div>
      <section className="todos todos__container">
        <TodoList todos={preparedTodos} />
      </section>
    </>
  );
}

export default App;
