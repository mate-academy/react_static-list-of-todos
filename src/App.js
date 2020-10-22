import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Container from 'react-bootstrap/Container';
import TodoList from './componets/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(item => ({
  ...item,
  user: users.find(user => user.id === item.userId),
}));

function App() {
  return (
    <Container>
      <div className="todo__container">
        <h1 className="todo__header">Static list of todos</h1>
        <TodoList todos={preparedTodos} />
      </div>
    </Container>
  );
}

export default App;
