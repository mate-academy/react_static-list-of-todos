import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';
import { Todo, User, PreparedTodo } from './react-app-env';

const App: React.FC = () => {
  const prepareTodo = (
    todosList: Todo[],
    usersList: User[],
  ): PreparedTodo[] => {
    return todosList.map((todo: Todo) => ({
      ...todo,
      user: usersList.find((user: User) => todo.userId === user.id) || null,
    }));
  };

  const preparedTodos: PreparedTodo[] = prepareTodo(todos, users);

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList preparedTodos={preparedTodos} />
    </div>
  );
};

export default App;
