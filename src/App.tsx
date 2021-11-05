import React from 'react';
import './App.scss';

import { TodoList } from './components/TodoList';

import { UserType } from './Types/UserType';
import { Todo } from './Types/TodoType';
import { PreparedTodoType } from './Types/PreparedTodosType';

import todos from './api/todos';
import users from './api/users';

function createPreparedTodos(usersArray: UserType[], todosArray: Todo[]): PreparedTodoType[] {
  const preparedTodos: PreparedTodoType[] = [];

  todosArray.forEach((todo: Todo, i: number): void => {
    const preparedTodo: PreparedTodoType = {
      ...todo,
      user: null,
    };

    const sameUser = usersArray.find(
      (userItem: UserType): boolean => (
        userItem.id === todo.userId
      ),
    );

    if (sameUser) {
      preparedTodo.user = sameUser;
    }

    preparedTodos[i] = preparedTodo;
  });

  return preparedTodos;
}

const preparedTodos: PreparedTodoType[] = createPreparedTodos(users, todos);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList preparedTodosProps={preparedTodos} />
  </div>
);

export default App;
