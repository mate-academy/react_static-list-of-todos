import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import { Todo } from './types/Todo';
import { PreparedTodo } from './types/PreparedTodo';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos: PreparedTodo[] = [];

users.forEach(user => {
  const index: number = todos.findIndex(todo => todo.userId === user.id);

  if (index > 0) {
    const todo: Todo = todos[index];

    preparedTodos.push({ ...todo, user: { ...user } });
  }
});

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoList todos={preparedTodos} />
    </div>
  );
};

export default App;
