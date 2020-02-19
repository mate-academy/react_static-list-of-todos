import React from 'react';
import TodosList from './components/TodosList/TodosList';
import './App.css';

import todos from './api/todos';
import users from './api/users';

function App() {
  const preparedTodos = todos.map((todo) => {
    const temp = { ...todo };

    //temp.user = users.filter(user => user.id === todo.userId);
    /*users.filter(item => {
      if(item.id === todo.userId) temp.user = item;
      return ;
    });*/ //проверить, как-то так

    return temp;
  });

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

      <TodosList preparedTodos={preparedTodos} />
    </div>
  );
}

export default App;
