import React from 'react';
import './App.scss';
import PropTypes from 'prop-types';
import { TodoList } from './api/components/TodoList';
import todos from './api/todos';
import users from './api/users';
import { TodoShape } from './api/shapes/TodoShape';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(person => (
    person.id === todo.userId
  )),
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>Todos: </span>
        {todos.length}
      </p>
      <div className="wrapper">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Task</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <TodoList preparedTodos={preparedTodos} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

App.prototype = {
  preparedTodos: PropTypes.arrayOf(TodoShape).isRequired,
};

export default App;
