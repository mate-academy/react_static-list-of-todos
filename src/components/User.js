import React from 'react';
import TodoItems from './TodoItems';
import todos from '../api/todos';

const User = ( {user} ) => (
  <div className="user-details">
    <div className="sidebar">
      <h2 className="user-name">{user.name}</h2>
      <p className="user-info"><u>E-mail:</u> {user.email}</p>
      <p className="user-info"><u>Web-Site:</u> {user.website}</p>
      <p className="user-info"><u>Phone:</u> {user.phone}</p>
      <p className="user-info">{user.address.street} str. {user.address.suite}</p>
    </div>
    <ul className="sidebar">
      {todos.filter(todo => todo.userId === user.id).map(todo => (
        <TodoItems todo={todo} />
      ))}
    </ul>
  </div>
);

export default User;
