import React from 'react';
import TodoList from './TodoList';
import './App.css';

import todos from './api/todos';
import users from './api/users';

function App() {
  const getTodosWithUsers = (todoList, userList) => {
    const todosArr = [...todoList];

    return todosArr.map((todo) => {
      const user = userList.find(person => person.id === todo.userId);

      return {
        ...todo,
        user,
      };
    });
  };

  const preparedTodos = getTodosWithUsers(todos, users);

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
