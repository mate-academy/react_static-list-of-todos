import React from 'react';
import users from '../api/users';
import User from './User';

function TodoList(props) {
  return (
    <div className="todo-list">
      {users.map(user => (
        <User user={user} />
      ))}
    </div>
  );
}

export default TodoList;
