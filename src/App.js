/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import './App.scss';
import PropTypes from 'prop-types';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = [];

for (const todo of todos) {
  for (const user of users) {
    if (todo.userId === user.id) {
      todo.user = user;
    }
  }

  preparedTodos.push(todo);
}

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>Todos: </span>
        {todos.length}
      </p>

      <ul>
        <TodoList prepTodos={preparedTodos} />
      </ul>

      <p>
        <span>Users: </span>
        {users.length}
      </p>
    </div>
  );
}

const TodoList = ({ prepTodos }) => (
  <>
    {prepTodos.map(prepTodo => (
      <li key={prepTodo.id}>
        {prepTodo.title}
        <Todo objTodo={prepTodo} />
      </li>
    ))}
  </>
);

const Todo = ({ objTodo }) => (
  <>
    <ul>
      <li>
        Title:
        {objTodo.title}
      </li>
      <li>
        Completed:
        {objTodo.completed ? 'true' : 'false'}
      </li>
      <li>
        User:
        <User objUser={objTodo.user} />
      </li>
    </ul>
  </>
);

const User = ({ objUser }) => (
  <>
    <span className="userName">{objUser.name}</span>
  </>
);

User.propTypes = {
  objUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
      geo: PropTypes.shape({
        lat: PropTypes.string.isRequired,
        lng: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
      catchPhrase: PropTypes.string.isRequired,
      bs: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

Todo.propTypes = {
  objTodo: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: User,
  }).isRequired,
};

TodoList.propTypes = {
  prepTodos: PropTypes.arrayOf(Todo).isRequired,
};

export default App;
