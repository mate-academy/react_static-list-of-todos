import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';
import './types/types';

// interface Geo {
//   lat: string,
//   lng: string,
// }

// interface Address {
//   street: string,
//   suite: string,
//   city: string,
//   zipcode: string,
//   geo: Geo,
// }

// interface Company {
//   name: string,
//   catchPhrase: string,
//   bs: string,
// }

// interface User {
//   id: number,
//   name: string,
//   username: string,
//   email: string,
//   address: Address,
//   phone: string,
//   website: string,
//   company: Company,
// }

// interface Todo {
//   userId: number,
//   id: number,
//   title: string,
//   completed: boolean,
// }

// interface PreparedTodo extends Todo {
//   user: User | null;
// }

const preparedTodos: PreparedTodo[] = todos.map((todo: Todo) => {
  const correctUser = users.find((user) => (user.id === todo.userId));

  const prepared: PreparedTodo = {
    userId: todo.userId,
    id: todo.id,
    title: todo.title,
    completed: todo.completed,
    user: correctUser || null,
  };

  return prepared;
});

const App: React.FC<User> = () => (
  <div className="App">
    <TodoList todo={preparedTodos} />
  </div>
);

export default App;
