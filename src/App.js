import React from 'react';
import './App.css';
import './components/TodoItem/TodoItem';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

function getTodosWithUsers(todos, users) {
  return todos.map(todo => ({
    ...todo,
    user: users.find(item => item.id === todo.userId),
  }
  ));
}

const preparedTodos = getTodosWithUsers(todos, users);

const App = () => (
  <div className="App">
    <h1>
      <span className="ui red header">Static</span>
      {' '}
      <span className="ui green header">list</span>
      {' '}
      <span className="ui yellow header">of</span>
      {' '}
      <span className="ui blue header">todos</span>
    </h1>
    <div className="ui statistics">
      <div className="teal statistic">
        <div className="value">
          {todos.length}
        </div>
        <div className="label">
          TODOs
        </div>
      </div>
      <div className="orange statistic">
        <div className="value">
          {users.length}
        </div>
        <div className="label">
          USERS
        </div>
      </div>
    </div>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
