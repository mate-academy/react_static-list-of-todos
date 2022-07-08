import React from 'react';
import todos from './api/todos';
import users from './api/users';
import './App.scss';
import TodoList from './components/TodoList/TodoList';

const listTodoWithUser = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <TodoList listTodoWithUser={listTodoWithUser} />
  </div>
);

export default App;
