import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

function todosWithUser(listTasks, listUsers) {
  return listTasks.map((item) => {
    const getUser = listUsers.find(person => person.id === item.userId);

    return { ...item, user: getUser };
  });
}

function App() {
  const fullList = todosWithUser(todos, users);

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>Todos:</span>
        {fullList.length}
      </p>
      <TodoList todos={fullList} />
      <p>
        <span>Users: </span>
        {users.length}
      </p>
    </div>
  );
}

export default App;
