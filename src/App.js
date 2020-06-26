import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const usersMap = {};
const usersLength = users.length;

for (let i = 0; i < usersLength; i += 1) {
  usersMap[users[i].id] = users[i];
}

const preparedTodos = todos.map(todo => ({
  user: usersMap[todo.userId],
  ...todo,
}));

function App() {
  return (
    <div className="App">
      <TodoList todolist={preparedTodos} />

      {/* <p>
        <span>Users: </span>
        {users.length}
      </p> */}
    </div>
  );
}

export default App;
