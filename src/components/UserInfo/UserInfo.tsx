import React from 'react';

interface User {
  name: string;
  email: string;
  username: string;
}

export const UserInfo: React.FC<User> = ({ name, email, username }) => (
  <div className="todo-list__user">
    <p className="todo-list__main">
      <span className="todo-list__email">
        Username:
      </span>
      {username}
    </p>

    <p className="todo-list__main" data-cy="username">
      <span className="todo-list__email">
        Name:
      </span>
      {name}
    </p>

    <p className="todo-list__main" data-cy="email">
      <span className="todo-list__email">
        Email:
      </span>
      {email}
    </p>
  </div>
);
