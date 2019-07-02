import React from 'react';
import PropTypes from 'prop-types';

import './App.css';

import todos from './api/todos';
import users from './api/users';

function getUser(userId) {
  return users.find(user => user.id === userId);
}

const todosWithUser = todos.map(todo => ({
  ...todo,
  user: getUser(todo.userId),
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={todosWithUser} />
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function TodoList(props) {
  return (
    <ul>
      {props.todos.map(todo => (
        <TodoItem todo={todo} />
      ))}
    </ul>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool,
    title: PropTypes.string,
    user: PropTypes.object,
    id: PropTypes.number,
  }).isRequired,
};

function TodoItem({ todo }) {
  return (
    <li>
      <label htmlFor={`todo-status-${todo.id}`}>
        <input
          type="checkbox"
          id={`todo-status-${todo.id}`}
          checked={todo.completed}
        />

        {todo.title}
      </label>

      <User user={todo.user} />
    </li>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

function User(props) {
  return <div>{props.user.name}</div>;
}

export default App;
