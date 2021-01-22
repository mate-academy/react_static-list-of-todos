import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos
  .map(todo => ({
    ...todo,
    user: users.find(user => user.id === todo.userId),
  }));

const doneTasks = todos.filter(todo => todo.completed).length;

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>TODO list</h1>
        <div className="header__info">
          <span>
            {`Tasks accomplished: ${doneTasks}`}
          </span>
          <span>
            {`Tasks to do: ${todos.length - doneTasks}`}
          </span>
          <span className="header__done" />
          <span>
            People involved:
            {` ${users.length}`}
          </span>
        </div>
      </div>

      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
