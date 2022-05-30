import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';
import { Todos } from './types/Todos';
import { Users } from './types/Users';
import { UserInfo } from './components/UserInfo/UsersInfo';
import { TodoInfo } from './components/TodoInfo/TodoInfo';

function prepearingTodos(todosList : Todos[], usersList : Users[]) {
  const prepearedTodos : Todos[] = [];

  todosList.forEach(element => {
    const searchingUser = usersList.find(
      user => element.userId === user.id,
    );

    const result = element;

    if (searchingUser) {
      result.user = searchingUser;
    } else {
      result.user = null;
    }

    prepearedTodos.push(result);
  });

  return prepearedTodos;
}

const prepearedTodos = prepearingTodos(todos, users);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList prepearedTodos={prepearedTodos} />
    <UserInfo user={users[0]} />
    <TodoInfo todo={todos[0]} />
  </div>
);

export default App;

/*

*/
