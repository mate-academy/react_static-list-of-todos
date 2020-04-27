import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

const preaparedTodos = todos.map((todo) => {
  const userInf = users.find(user => user.id === todo.userId);

  return {
    ...todo,
    user: {
      id: userInf.id,
      name: userInf.name,
    },
  };
});

function App() {
  return (
    <div className="App">
      <TodoList todoList={preaparedTodos} />
    </div>
  );
}

export default App;
