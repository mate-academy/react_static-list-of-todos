import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { PreparedTodo } from './components/Types/PreparedTodo';
import { User } from './components/Types/User';
import { Todo } from './components/Todo';
import { TodoList } from './components/TodoList/TodoList';

function prepare(todos1: Todo[], users1: User[]): PreparedTodo[] {
  return todos1.map(todo => ({
    ...todo,
    user: users1.find(user => user.id === todo.userId),
  }));
}

const preparedTodos = prepare(todos, users);

const App: React.FC = () => (
  <div className="App">
    <h1 style={{ textAlign: 'center' }}>Static list of todos</h1>
    <TodoList todoList={preparedTodos} />
  </div>
);

export default App;
