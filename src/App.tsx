import React from 'react';
import './App.scss';

import todosFromServer from './api/todos';
import users from './api/users';
import { TodoList } from './compnents/TodoList';
import { Todo } from './types/Todo';
import { PreparedTodo } from './types/PreparedTodo';

function preparedTodos(todos: Todo[]): PreparedTodo[] {
  return todos.map(todo => {
    const user = users.find(p => p.id === todo.userId) || null;

    return { ...todo, user };
  });
}

const App: React.FC = () => (
  <div className="App">
    <div className="todo__title">
      <div className="todo__title-name">Name</div>
      <div className="todo__title-email">Email</div>
      <div className="todo__title-todo">Todo</div>
      <div className="todo__title-status">Status</div>
    </div>
    <ul className="todo__list">
      {preparedTodos(todosFromServer).map(todo => (
        <li key={todo.id} className="todo__item">
          <TodoList user={todo.user} title={todo.title} completed={todo.completed} />
        </li>
      ))}
    </ul>
  </div>
);

export default App;
