import React from 'react';
import './App.scss';
import { users } from './api/users';
import { todos } from './api/todos';
import { User, Todo, FullTodo } from './react-app-env';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = (
  usersList: User[],
  todosList: Todo[],
) => {
  return todosList.map(todo => ({
    ...todo,
    user: usersList.find(user => todo.userId === user.id) || null,
  }));
};

const fullTodos: FullTodo[] = preparedTodos(users, todos);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <h1 className="title">Static list of todos</h1>
    <TodoList fulltodos={fullTodos} />
  </div>
);

export default App;
