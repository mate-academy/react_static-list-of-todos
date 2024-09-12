import React from 'react';
import './App.scss';

import todosFromServer from './api/todos';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Todo } from './types/Todo';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  // if there is no user with a given userId
  return foundUser || null;
}

export const todos: Todo[] = todosFromServer.map(todo => ({
  ...todo,
  user: getUser(todo.userId),
}));

interface TodoListInterface {
  todoItems: Todo[];
}

export const TodoList: React.FC<TodoListInterface> = ({ todoItems }) => {
  return (
    <section className="TodoList">
      {todoItems.map(todo => (
        <article
          key={todo.id}
          className={
            todo.completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'
          }
        >
          <h2 className="TodoInfo__title">{todo.title}</h2>
          <a className="UserInfo" href={`mailto:${todo.user?.email}`}>
            {todo.user?.name}
          </a>
        </article>
      ))}
    </section>
  );
};

export const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>

    <TodoList todoItems={todos} />
  </div>
);
