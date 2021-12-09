import React from 'react';
import './App.scss';
import { User } from './type/user';
import { Todo } from './type/todo';
import { PreparedTodo } from './type/preparedtodo';
import { TodoList } from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

const prepareTodos = (todoArr: Todo[], userArr: User[]):PreparedTodo[] => {
  const prepeared: PreparedTodo[] = [];
  const findUserById = (id: number, searchArr: User[]):User | null => {
    const user = searchArr.find(searchUser => searchUser.id === id);

    return user || null;
  };

  todoArr.forEach((todo, index) => {
    const user = findUserById(todo.id, userArr);

    prepeared[index] = { ...todo, user };
  });

  return prepeared;
};

const preparedTodos = prepareTodos(todos, users);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList prepared={preparedTodos} />
  </div>
);

export default App;
