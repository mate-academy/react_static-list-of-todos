import React from 'react';
import './User.css';

function User(userObj) {
  return (
    <span className="todo__userName">
      {userObj.name}
    </span>
  );
}

export default User;
