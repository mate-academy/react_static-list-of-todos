import React from 'react';
import TodoList from './TodoList';

import todos from './api/todos';
import users from './api/users';

const getTodosWithUsers = (todosArr, usersArr) => (
  todosArr.map((todo) => {
    const user = usersArr.find(person => person.id === todo.userId);

    return { ...todo, user };
  })
);

const preparedTodos = getTodosWithUsers(todos, users);

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
