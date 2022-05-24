import React from 'react';
import './App.scss';
import TodoList from './components/TodoList/TodoList';
import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => {
  return {
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="title">Statick User List</h1>
    <TodoList listOfTodos={preparedTodos} />
  </div>
);

export default App;
