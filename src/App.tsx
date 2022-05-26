import React from 'react';
import './App.scss';
import todosFromServer from './api/todos';
import usersFromServer from './api/users';
import { TodoList } from './components/TodoList/TodoList';
import { User, Todo, FullTodo } from './react-app-env';

const preparedTodos = (
  todos: Todo[],
  users: User[],
): FullTodo[] => {
  return todos.map(todo => ({
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  }));
};

const todos = preparedTodos(todosFromServer, usersFromServer);

const App: React.FC = () => (
  <div className="App">
    <ul>
      <TodoList todos={todos} />
    </ul>
  </div>
);

export default App;
